import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 section-full-width">
      {/* Header actualizado */}
      <header className="bg-teal-500 text-white p-4 section-full-width">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
            <div className="w-6 h-6 rounded flex items-center justify-center">
              🦷
            </div>
            <span className="font-medium text-sm">Centro Odontológico Bouzas</span>
          </div>
          
          {/* Iconos funcionales del lado derecho */}
          <div className="flex items-center space-x-1">

            
            {/* Calendario - Citas */}
            <button 
              onClick={() => navigate('/citas')}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
              title="Pedir Cita"
            >
              <span className="text-lg">📅</span>
            </button>
            
            {/* Cupones de descuento */}
            <button 
              onClick={() => navigate('/cupones')}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
              title="Cupones"
            >
              <span className="text-xl">🎟️</span>
            </button>
          </div>
        </div>
      </header>

      {/* Contenido de cada página */}
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout