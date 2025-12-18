import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useApi } from '../hooks/useApi'
import { useShare } from '../hooks/useShare'
import ShareIcon from '../components/ShareIcon'

const ServiceDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { get } = useApi()
  const { share } = useShare()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true)
        const response = await get(`/api/services/${slug}`)
        
        if (response.success) {
          setService(response.data)
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

  const handleShare = async () => {
    if (!service) return

    const result = await share({
      title: `${service.name} - Centro Odontológico Bouzas`,
      text: service.short_description || service.description,
      url: `https://www.appdentalbouzas.com/${slug}`
    })

    // Si se usó clipboard (desktop), mostrar mensaje
    if (result.success && result.method === 'clipboard') {
      alert(result.message)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-safe">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mb-4"></div>
          <p className="text-gray-600">Cargando servicio...</p>
        </div>
      </div>
    )
  }

  if (error || !service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-safe">
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
      <div className="container mx-auto px-4 pb-8 pt-safe">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')} 
            className="text-teal-600 hover:text-teal-700"
            aria-label="Volver al inicio"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleShare}
            className="text-teal-600 hover:text-teal-700 inline-flex items-center text-sm font-medium"
            title="Compartir servicio"
          >
            <ShareIcon className="w-5 h-5 mr-1" />
            Compartir
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

              {/* Share Button */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Compartir este servicio
                </button>
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