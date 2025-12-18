import { Capacitor } from '@capacitor/core';

/**
 * Componente que renderiza el icono de compartir apropiado según la plataforma
 * - iOS: Square con flecha hacia arriba (nativo de iOS)
 * - Android: 3 nodos conectados (nativo de Android)
 * - Web/PWA: Paper plane (neutral)
 */

const getPlatformSafe = () => {
  try {
    return Capacitor.getPlatform?.() ?? 'web'; // 'ios' | 'android' | 'web'
  } catch {
    return 'web';
  }
};

export function ShareIcon({
  platform = 'auto',
  webDefault = 'plane',
  width = 22,
  height = 22,
  className = '',
  ...svgProps
}) {
  const detected = platform === 'auto' ? getPlatformSafe() : platform;

  if (detected === 'ios') {
    return <IconIOS width={width} height={height} className={className} {...svgProps} />;
  }
  
  if (detected === 'android') {
    return <IconAndroidOutline width={width} height={height} className={className} {...svgProps} />;
  }

  // Web / PWA
  if (webDefault === 'ios') {
    return <IconIOS width={width} height={height} className={className} {...svgProps} />;
  }
  
  if (webDefault === 'android') {
    return <IconAndroidOutline width={width} height={height} className={className} {...svgProps} />;
  }
  
  return <IconPaperPlaneOutline width={width} height={height} className={className} {...svgProps} />;
}

/* ====== ICONOS INDIVIDUALES ====== */

/** iOS-like: square + arrow up (outline) */
export function IconIOS(props) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor"
      strokeWidth={2} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <polyline points="8 7 12 3 16 7" />
      <line x1="12" y1="3" x2="12" y2="15" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    </svg>
  );
}

/** Android-like: 3 nodos conectados (outline) */
export function IconAndroidOutline(props) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor"
      strokeWidth={2} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.6 13.5l6.8 4M15.4 6.5L8.6 10.5" />
    </svg>
  );
}

/** Paper plane (outline) — neutral para iOS y Android */
export function IconPaperPlaneOutline(props) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor"
      strokeWidth={2} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M22 2 11 13" />
      <path d="M22 2 14 22l-3-7-7-3 18-10z" />
    </svg>
  );
}

/** Paper plane (fill) — alternativa sólida */
export function IconPaperPlaneFill(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 2a1 1 0 0 1 .46 1.89L6.9 11.34l5.13 2.2 2.18 5.13L22.1 2.54A1 1 0 0 1 22 2z" />
      <path d="M13.05 13.05 11 22l-1.72-4.01L5.2 16.28 13.05 13.05z" />
    </svg>
  );
}

export default ShareIcon;

