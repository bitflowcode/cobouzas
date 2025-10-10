import { useEffect } from 'react';
import { PushNotifications } from '@capacitor/push-notifications';
import { Capacitor } from '@capacitor/core';
import { API_BASE_URL } from '../config/api';

const useNativePushNotifications = () => {
  useEffect(() => {
    // Solo ejecutar en plataformas nativas (iOS/Android)
    if (!Capacitor.isNativePlatform()) {
      return;
    }

    const initPushNotifications = async () => {
      try {
        // Solicitar permisos
        const permission = await PushNotifications.requestPermissions();
        
        if (permission.receive === 'granted') {
          // Registrar con FCM/APNS
          await PushNotifications.register();
        }

        // Listener: Token recibido
        PushNotifications.addListener('registration', async (token) => {
          console.log('Push token:', token.value);
          
          // Enviar token al backend
          try {
            const platform = Capacitor.getPlatform(); // 'ios' o 'android'
            await fetch(`${API_BASE_URL}/api/notifications/subscribe`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                token: token.value,
                device: platform
              })
            });
            console.log('Token enviado al backend');
          } catch (error) {
            console.error('Error enviando token:', error);
          }
        });

        // Listener: Error en registro
        PushNotifications.addListener('registrationError', (error) => {
          console.error('Error en registro push:', error);
        });

        // Listener: Notificación recibida (app en foreground)
        PushNotifications.addListener('pushNotificationReceived', (notification) => {
          console.log('Notificación recibida:', notification);
        });

        // Listener: Notificación clickeada
        PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
          console.log('Notificación clickeada:', notification);
          // Aquí puedes navegar a la URL si viene en notification.data.url
        });

      } catch (error) {
        console.error('Error inicializando push notifications:', error);
      }
    };

    initPushNotifications();

    // Cleanup
    return () => {
      PushNotifications.removeAllListeners();
    };
  }, []);
};

export default useNativePushNotifications;