import { Outlet, useNavigate } from 'react-router-dom'
import BottomNavigation from './BottomNavigation'

const Layout = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con extensión para Safe Area */}
      <div className="bg-teal-500" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
        <header className="bg-teal-500 text-white w-full shadow-md p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm p-1.5 flex-shrink-0">
              <img 
                src="/logo-192.png" 
                alt="Centro Odontológico Bouzas" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="font-semibold text-lg md:text-xl lg:text-2xl leading-tight">
              <span className="block lg:inline">Centro Odontológico</span>
              <span className="block lg:inline lg:ml-1.5">Bouzas</span>
            </div>
          </div>
          
          {/* Iconos funcionales del lado derecho */}
          <div className="flex items-center space-x-2 md:space-x-3">
            
            {/* Pin - Centro/Ubicación */}
            <button 
              onClick={() => navigate('/centro')}
              className="w-11 h-11 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95 flex items-center justify-center"
              title="Ubicación"
            >
              <span className="text-xl md:text-2xl drop-shadow-sm">📍</span>
            </button>
            
            {/* Sobre - Contacto */}
            <button 
              onClick={() => navigate('/contacto')}
              className="w-11 h-11 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95 flex items-center justify-center"
              title="Contacto"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
        </header>
      </div>

      {/* Contenido de cada página - Ancho máximo en desktop con padding bottom para el nav */}
      <main className="max-w-7xl mx-auto pb-24">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}

export default Layout