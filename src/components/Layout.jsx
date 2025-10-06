import { Outlet, useNavigate } from 'react-router-dom'

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
            <span className="font-medium text-sm md:text-lg lg:text-xl">Centro Odontológico Bouzas</span>
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
          </div>
        </div>
      </header>

      {/* Contenido de cada página - Ancho máximo en desktop */}
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout