import { useEffect, useState } from 'react';
import { Capacitor } from '@capacitor/core';
import { 
  requestNotificationPermission, 
  onMessageListener,
  saveTokenToBackend 
} from '../firebase/config';

export default function NotificationHandler() {
  const [notification, setNotification] = useState(null);
  const [showPermissionPrompt, setShowPermissionPrompt] = useState(false);

  useEffect(() => {
    // NO ejecutar en plataformas nativas (iOS/Android)
    // En nativo usamos Capacitor Push Notifications (ver useNativePushNotifications.js)
    if (Capacitor.isNativePlatform()) {
      console.log('ℹ️ NotificationHandler: Plataforma nativa detectada, componente deshabilitado');
      return;
    }

    // Verificar si el navegador soporta notificaciones
    if (!('Notification' in window)) {
      console.warn('Este navegador no soporta notificaciones');
      return;
    }

    // Verificar estado de permisos
    if (Notification.permission === 'default') {
      // Esperar 5 segundos antes de mostrar prompt (mejor UX)
      const timer = setTimeout(() => {
        setShowPermissionPrompt(true);
      }, 5000);
      return () => clearTimeout(timer);
    } else if (Notification.permission === 'granted') {
      // Si ya hay permiso, obtener token
      initializeNotifications();
    }

    // Escuchar mensajes en primer plano
    onMessageListener()
      .then((payload) => {
        setNotification({
          title: payload.notification?.title || 'Notificación',
          body: payload.notification?.body || '',
        });
        
        // Auto-ocultar después de 5 segundos
        setTimeout(() => setNotification(null), 5000);
      })
      .catch((err) => console.error('Error listening to messages:', err));
  }, []);

  const initializeNotifications = async () => {
    const token = await requestNotificationPermission();
    if (token) {
      await saveTokenToBackend(token);
      setShowPermissionPrompt(false);
    }
  };

  const handleEnableNotifications = async () => {
    await initializeNotifications();
  };

  const handleDismissPrompt = () => {
    setShowPermissionPrompt(false);
    // Guardar en localStorage para no mostrar de nuevo en esta sesión
    localStorage.setItem('notification-prompt-dismissed', 'true');
  };

  // No mostrar si ya fue dismissed en esta sesión
  if (localStorage.getItem('notification-prompt-dismissed')) {
    return null;
  }

  return (
    <>
      {/* Prompt para activar notificaciones */}
      {showPermissionPrompt && Notification.permission === 'default' && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] max-w-md w-full px-4">
          <div className="bg-white rounded-lg shadow-2xl p-4 border border-gray-200">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-[#129099]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Recibe Notificaciones
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Te avisaremos sobre novedades, promociones y recordatorios de citas
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={handleEnableNotifications}
                    className="bg-[#129099] text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#0f7680] transition-colors"
                  >
                    Activar
                  </button>
                  <button
                    onClick={handleDismissPrompt}
                    className="text-gray-600 px-4 py-2 rounded-lg text-sm hover:text-gray-800 transition-colors"
                  >
                    Más tarde
                  </button>
                </div>
              </div>
              <button
                onClick={handleDismissPrompt}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notificación en primer plano */}
      {notification && (
        <div className="fixed top-4 right-4 z-[9999] max-w-sm animate-slide-in">
          <div className="bg-white rounded-lg shadow-2xl p-4 border-l-4 border-[#129099]">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-[#129099]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">
                  {notification.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {notification.body}
                </p>
              </div>
              <button
                onClick={() => setNotification(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}