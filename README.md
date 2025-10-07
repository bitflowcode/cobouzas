# 🦷 Centro Odontológico Bouzas

Aplicación web progresiva (PWA) para el Centro Odontológico Bouzas en Vigo.

## 🚀 Tecnologías

- **React 19** - Biblioteca de UI
- **Vite 7** - Build tool y dev server
- **React Router 7** - Navegación
- **Tailwind CSS 3** - Estilos
- **PWA** - Progressive Web App con manifest configurado

## 📦 Instalación

```bash
npm install
```

## 🛠️ Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) para ver la aplicación.

## 🏗️ Build

```bash
npm run build
npm run preview  # Para previsualizar el build
```

## 🎨 Logos

Los logos de la aplicación están configurados en la carpeta `/public` en los siguientes tamaños:
- `logo-192.png` - Icono 192x192px
- `logo-512.png` - Icono 512x512px  
- `apple-touch-icon.png` - Icono para iOS 180x180px
- `favicon.ico` - Favicon del sitio

## 📱 PWA (Progressive Web App)

La aplicación está configurada como PWA y puede instalarse en dispositivos móviles y escritorio.

**Archivos de configuración PWA:**
- `/public/manifest.json` - Configuración de la PWA
- `/public/logo-192.png` - Icono 192x192
- `/public/logo-512.png` - Icono 512x512
- `/public/apple-touch-icon.png` - Icono para iOS
- `/public/favicon.ico` - Favicon del sitio

## 🌐 Despliegue

La aplicación se despliega automáticamente en Vercel desde la rama `main`.

URL de producción: [https://www.appdentalbouzas.com](https://www.appdentalbouzas.com)

## 📂 Estructura del Proyecto

```
src/
├── assets/           # Imágenes y recursos
├── components/       # Componentes reutilizables
│   ├── BottomNavigation.jsx
│   ├── HeroCarousel.jsx
│   ├── Layout.jsx
│   └── ...
├── hooks/            # Custom hooks
│   └── useApi.js
├── pages/            # Páginas/Rutas
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── Citas.jsx
│   └── ...
├── App.jsx           # Componente principal
└── main.jsx          # Punto de entrada
```

## 🔧 Configuración

### Variables de entorno

Actualmente no se requieren variables de entorno para desarrollo local.

### Configuración de Vite

Ver `vite.config.js` para configuración del build y dev server.

### Configuración de Tailwind

Ver `tailwind.config.js` para personalización de estilos.

## 📄 Licencia

Privado - Centro Odontológico Bouzas

## 👥 Contacto

- **Email**: admin@dentalbouzas.com
- **Web**: https://www.appdentalbouzas.com

---

Desarrollado con ❤️ para Centro Odontológico Bouzas
