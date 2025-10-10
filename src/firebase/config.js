import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// ❌ NO COMPARTIR PÚBLICAMENTE ESTAS CREDENCIALES
// 🔑 REEMPLAZAR CON TUS CREDENCIALES REALES DE FIREBASE CONSOLE

const firebaseConfig = {
  apiKey: "AIzaSyA5r1OdJ8dFQ7S_KDsFtD2Iq_KnUwFkpHk",                      // ← Firebase Console → Settings → Your apps
  authDomain: "cobouzas.firebaseapp.com",
  projectId: "cobouzas",
  storageBucket: "cobouzas.firebasestorage.app",          // ← Normalmente es projectId.appspot.com
  messagingSenderId: "540274237001",    // ← Número de 12 dígitos
  appId: "1:540274237001:web:d05da1245865b8eeafa998",                        // ← Formato: 1:123456789012:web:abc123def456
  measurementId: "G-5B0L827VTX"              // ← Formato: G-XXXXXXXXXX (OPCIONAL - eliminar si no tienes Analytics)
};

// 🔑 REEMPLAZAR con tu VAPID Key de Firebase Console → Cloud Messaging → Web Push certificates
const VAPID_KEY = 'BLbcMol1tiGXxtC5Bi7memeeHSf1VR--FU0MtvOezn2GaLsowVd6-YtHWW095gozl5xV2MsC5QGBOR4Hgd-R3u0';  // ← Empieza con B... (muy larga, ~180 caracteres)

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firebase Cloud Messaging
let messaging = null;
try {
  messaging = getMessaging(app);
} catch (error) {
  console.error('Error inicializando Firebase Messaging:', error);
}

/**
 * Solicita permiso de notificaciones y obtiene el token FCM
 */
export const requestNotificationPermission = async () => {
  try {
    console.log('Solicitando permiso de notificaciones...');
    
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
      console.log('✅ Permiso de notificaciones concedido');
      
      // Obtener token de FCM
      const token = await getToken(messaging, { 
        vapidKey: VAPID_KEY 
      });
      
      if (token) {
        console.log('✅ Token FCM obtenido:', token);
        return token;
      } else {
        console.warn('⚠️ No se pudo obtener el token FCM');
        return null;
      }
    } else if (permission === 'denied') {
      console.warn('❌ Permiso de notificaciones denegado');
      return null;
    } else {
      console.log('⏸️ Permiso de notificaciones pendiente');
      return null;
    }
  } catch (error) {
    console.error('❌ Error solicitando permiso:', error);
    return null;
  }
};

/**
 * Escuchar mensajes en primer plano
 */
export const onMessageListener = () =>
  new Promise((resolve) => {
    if (messaging) {
      onMessage(messaging, (payload) => {
        console.log('📬 Mensaje recibido en primer plano:', payload);
        resolve(payload);
      });
    }
  });

/**
 * Guardar token en backend
 */
export const saveTokenToBackend = async (token) => {
  try {
    // Importar dinámicamente para evitar problemas de dependencias circulares
    const { API_BASE_URL } = await import('../config/api');
    
    const response = await fetch(`${API_BASE_URL}/api/notifications/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
        device: 'web',
        timestamp: new Date().toISOString()
      }),
    });

    if (response.ok) {
      console.log('✅ Token guardado en backend');
      return true;
    } else {
      console.error('❌ Error guardando token en backend');
      return false;
    }
  } catch (error) {
    console.error('❌ Error conectando con backend:', error);
    return false;
  }
};

export { messaging };