import { useNavigate } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import { useServices } from '../hooks/useApi'

const Services = () => {
  const navigate = useNavigate()
  const { services, loading } = useServices()

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mb-4"></div>
            <p className="text-gray-600">Cargando servicios...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <button 
            onClick={() => navigate('/')} 
            className="text-teal-600 hover:text-teal-700 mb-4 inline-flex items-center"
          >
            ← Volver al inicio
          </button>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Nuestros Servicios</h1>
          <p className="text-gray-600">Descubre todos los tratamientos que ofrecemos en nuestro centro</p>
        </div>

        {/* Services Grid */}
        {services.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <div className="text-6xl mb-4">🦷</div>
            <h3 className="text-xl font-medium mb-2">No hay servicios disponibles</h3>
            <p>Pronto tendremos más información sobre nuestros tratamientos</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .sort((a, b) => (a.order_index || 0) - (b.order_index || 0))
              .map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  variant="card" 
                />
              ))
            }
          </div>
        )}

        {/* Call to action */}
        {services.length > 0 && (
          <div className="text-center mt-12 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Tienes dudas sobre algún tratamiento?</h2>
            <p className="text-gray-600 mb-6">Nuestro equipo profesional está listo para asesorarte</p>
            <button 
              onClick={() => navigate('/citas')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Solicitar Cita
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Services