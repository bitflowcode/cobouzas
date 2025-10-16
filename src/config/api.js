import { Capacitor } from '@capacitor/core';

/**
 * Obtener la URL base de la API
 * En plataformas nativas (iOS/Android), SIEMPRE usar URL absoluta
 * En web, permitir variable de entorno o usar URL absoluta por defecto
 */
export const getApiBaseUrl = () => {
  const isNativePlatform = Capacitor.isNativePlatform();
  
  // En plataformas nativas, SIEMPRE usar URL absoluta
  if (isNativePlatform) {
    return 'https://api.appdentalbouzas.com';
  }
  
  // En web, usar variable de entorno o fallback
  return import.meta.env.VITE_API_URL || 'https://api.appdentalbouzas.com';
};

// Exportar como constante para uso directo

