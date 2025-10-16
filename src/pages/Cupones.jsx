import { useNavigate } from 'react-router-dom'

const Cupones = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con botón back */}
      <div className="bg-teal-500 text-white p-4 pt-safe flex items-center justify-between">
        <button 
          onClick={() => navigate('/')}
          className="text-white text-xl"
        >
          ✕
        </button>
        <h1 className="text-lg font-medium">Cupones de Descuento</h1>
        <div className="w-6"></div>
      </div>

      {/* Contenido */}
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <div className="text-6xl mb-4">🎟️</div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Ofertas Especiales</h2>
          <p className="text-gray-600 mb-6">
            Próximamente tendremos cupones de descuento para nuestros tratamientos.
          </p>
          <div className="bg-gray-100 rounded-lg p-8">
            <p className="text-gray-500">🚧 Funcionalidad en desarrollo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cupones