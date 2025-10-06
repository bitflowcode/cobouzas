import { Outlet, useNavigate } from 'react-router-dom'
import BottomNavigation from './BottomNavigation'

const Layout = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header actualizado - Ancho completo con contenedor interno */}
      <header className="bg-teal-500 text-white p-4 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded flex items-center justify-center">
              <span className="text-xl md:text-2xl lg:text-3xl">🦷</span>
            </div>
            <span className="font-medium text-base md:text-lg lg:text-xl">Centro Odontológico Bouzas</span>
          </div>
          
          {/* Iconos funcionales del lado derecho */}
          <div className="flex items-center space-x-1 md:space-x-2">
            
            {/* Calendario - Citas */}
            <button 
              onClick={() => navigate('/citas')}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
              title="Pedir Cita"
            >
              <span className="text-lg md:text-2xl lg:text-3xl">📅</span>
            </button>
            
            {/* Cupones de descuento */}
            <button 
              onClick={() => navigate('/cupones')}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
              title="Cupones"
            >
              <span className="text-xl md:text-2xl lg:text-3xl">🎟️</span>
            </button>

            {/* Ajustes */}
            <button 
              onClick={() => navigate('/ajustes')}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
              title="Ajustes"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Contenido de cada página - Ancho máximo en desktop con padding bottom para el nav */}
      <main className="max-w-7xl mx-auto pb-16">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}

export default Layout