// Firebase Cloud Messaging Service Worker
// ❌ NO COMPARTIR PÚBLICAMENTE ESTAS CREDENCIALES
// 🔑 REEMPLAZAR CON TUS CREDENCIALES REALES DE FIREBASE CONSOLE

importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// 🔑 REEMPLAZAR con tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA5r1OdJ8dFQ7S_KDsFtD2Iq_KnUwFkpHk",                      // ← Firebase Console → Settings → Your apps
  authDomain: "cobouzas.firebaseapp.com",
  projectId: "cobouzas",
  storageBucket: "cobouzas.firebasestorage.app",
  messagingSenderId: "540274237001",    // ← Número de 12 dígitos
  appId: "1:540274237001:web:d05da1245865b8eeafa998",                        // ← Formato: 1:123456789012:web:abc123def456
  measurementId: "G-5B0L827VTX"              // ← Formato: G-XXXXXXXXXX (OPCIONAL - eliminar si no tienes)
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ===== CACHE BÁSICO PARA PWA =====
const CACHE_NAME = 'cobouzas-pwa-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/logo-192.png',
  '/logo-512.png',
  '/manifest.json'
];

// Instalar Service Worker y cachear assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('✅ Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activar Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia de cache: Network First, falling back to cache
// ⚠️ EXCLUIR peticiones a la API para apps nativas
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // NO interceptar peticiones a la API
  if (url.hostname === 'api.appdentalbouzas.com' || 
      url.pathname.startsWith('/api/')) {
    // Dejar pasar directamente, sin cachear
    return;
  }
  
  // Solo cachear assets estáticos (HTML, CSS, JS, imágenes)
  if (event.request.method !== 'GET') {
    return;
  }
  
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cachear solo respuestas exitosas de assets estáticos
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Si falla la red, usar cache
        return caches.match(event.request);
      })
  );
});

// ===== FIREBASE CLOUD MESSAGING =====

// Manejar mensajes en background
messaging.onBackgroundMessage((payload) => {
  console.log('📬 Mensaje recibido en background:', payload);

  const notificationTitle = payload.notification?.title || 'Centro Odontológico Bouzas';
  const notificationOptions = {
    body: payload.notification?.body || 'Nueva notificación',
    icon: '/logo-192.png',
    badge: '/logo-192.png',
    image: payload.notification?.image || null,
    data: payload.data || {},
    tag: payload.data?.tag || 'default',
    requireInteraction: false,
    vibrate: [200, 100, 200],
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Manejar clicks en notificaciones
self.addEventListener('notificationclick', (event) => {
  console.log('🔔 Click en notificación:', event.notification);
  
  event.notification.close();

  const urlToOpen = event.notification.data?.url || 'https://www.appdentalbouzas.com/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        // Si hay una ventana abierta, enfocarla
        for (const client of clientList) {
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }
        // Si no, abrir una nueva ventana
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});