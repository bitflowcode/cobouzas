import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useServices } from '../hooks/useApi'

const ServiceDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://api.appdentalbouzas.com'}/api/services/${slug}`)
        const data = await response.json()
        
        if (data.success) {
          setService(data.data)
        } else {
          setError('Servicio no encontrado')
        }
      } catch (err) {
        setError('Error cargando servicio')
        console.error('Error fetching service:', err)
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchService()
    }
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mb-4"></div>
          <p className="text-gray-600">Cargando servicio...</p>
        </div>
      </div>
    )
  }

  if (error || !service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🦷</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Servicio no encontrado</h1>
          <p className="text-gray-600 mb-6">El servicio que buscas no está disponible</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate('/')} 
            className="text-teal-600 hover:text-teal-700 mb-4 inline-flex items-center"
          >
            ← Volver al inicio
          </button>
        </div>

        {/* Service Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className={`w-full h-64 md:h-80 bg-gradient-to-r ${service.gradient_from} ${service.gradient_to} flex items-center justify-center overflow-hidden`}>
            {service.featured_image_url ? (
              <img 
                src={service.featured_image_url} 
                alt={service.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Si la imagen falla, mostrar el icono
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  parent.innerHTML = `<span class="text-8xl text-white">${service.icon}</span>`;
                  parent.className = parent.className.replace('overflow-hidden', '');
                }}
              />
            ) : (
              <span className="text-8xl text-white">{service.icon}</span>
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="max-w-4xl mx-auto">
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {service.name}
              </h1>

              {/* Short Description */}
              <div className="mb-6">
                <span className="inline-block bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                  TRATAMIENTO
                </span>
                <p className="text-xl text-gray-700 font-medium">
                  {service.short_description}
                </p>
              </div>

              {/* Full Description */}
              <div className="prose max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {service.description}
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-12 bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  ¿Interesado en este tratamiento?
                </h3>
                <p className="text-gray-600 mb-6">
                  Nuestro equipo profesional está listo para asesorarte
                </p>
                <button 
                  onClick={() => navigate('/citas')}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Solicitar Cita
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail