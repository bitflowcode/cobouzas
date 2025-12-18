import { useCallback } from 'react';
import { Capacitor } from '@capacitor/core';
import { Share } from '@capacitor/share';

/**
 * Hook reutilizable para compartir contenido
 * Compatible con Capacitor Share (iOS/Android) y Web Share API con fallback a portapapeles
 */
export const useShare = () => {
  const share = useCallback(async ({ title, text, url }) => {
    // Datos a compartir
    const shareData = {
      title: title || 'Centro Odontológico Bouzas',
      text: text || 'Visita nuestro centro odontológico',
      url: url || window.location.href
    };

    try {
      // 1. Plataformas nativas (iOS/Android) - Usar plugin de Capacitor
      if (Capacitor.isNativePlatform()) {
        await Share.share({
          title: shareData.title,
          text: shareData.text,
          url: shareData.url,
          dialogTitle: 'Compartir'
        });
        console.log('✅ Contenido compartido correctamente (Capacitor)');
        return { success: true, method: 'capacitor-native' };
      }
      
      // 2. Web - Verificar si el navegador soporta Web Share API
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        console.log('✅ Contenido compartido correctamente (Web Share API)');
        return { success: true, method: 'web-share-api' };
      } else if (navigator.share) {
        // Algunos navegadores tienen share pero no canShare
        await navigator.share(shareData);
        console.log('✅ Contenido compartido correctamente (Web Share API)');
        return { success: true, method: 'web-share-api' };
      } else {
        // 3. Fallback: Copiar al portapapeles
        const textToCopy = `${shareData.title}\n${shareData.text}\n${shareData.url}`;
        
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(textToCopy);
          return { success: true, method: 'clipboard', message: '✅ Información copiada al portapapeles' };
        } else {
          // Fallback más antiguo para navegadores sin Clipboard API
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          textArea.style.top = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          
          const successful = document.execCommand('copy');
          document.body.removeChild(textArea);
          
          if (successful) {
            return { success: true, method: 'clipboard-legacy', message: '✅ Información copiada al portapapeles' };
          } else {
            throw new Error('No se pudo copiar al portapapeles');
          }
        }
      }
    } catch (error) {
      // Usuario canceló o error
      if (error.name === 'AbortError') {
        console.log('Usuario canceló el compartir');
        return { success: false, cancelled: true };
      } else {
        console.error('Error al compartir:', error);
        return { success: false, error: error.message };
      }
    }
  }, []);

  return { share };
};

// Ejemplo de uso:
// const { share } = useShare();
// 
// const handleShare = async () => {
//   const result = await share({
//     title: 'Título del contenido',
//     text: 'Descripción del contenido',
//     url: 'https://www.appdentalbouzas.com/posts/mi-post'
//   });
//   
//   if (result.success && result.method === 'clipboard') {
//     alert(result.message);
//   }
// };