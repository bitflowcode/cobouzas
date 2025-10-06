import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Ajustes = () => {
  const navigate = useNavigate()
  const [distanceUnit, setDistanceUnit] = useState(
    localStorage.getItem('distanceUnit') || 'km'
  )

  const handleDistanceChange = (unit) => {
    setDistanceUnit(unit)
    localStorage.setItem('distanceUnit', unit)
  }

  const handleContactSupport = () => {
    window.location.href = 'mailto:admin@dentalbouzas.com?subject=Soporte%20T%C3%A9cnico%20-%20COBouzas'
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Centro Odontológico Bouzas',
          text: 'Descarga la app de Centro Odontológico Bouzas para gestionar tus citas y conocer nuestros servicios',
          url: 'https://www.appdentalbouzas.com'
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copiar al portapapeles
      navigator.clipboard.writeText('https://www.appdentalbouzas.com')
      alert('Enlace copiado al portapapeles')
    }
  }

  const handleClearCache = () => {
    if (confirm('¿Estás seguro de que deseas vaciar el caché? Esto eliminará todos los datos almacenados localmente.')) {
      localStorage.clear()
      sessionStorage.clear()
      // Reload después de limpiar
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-500 text-white p-4 flex items-center justify-between sticky top-0 z-10">
        <button 
          onClick={() => navigate('/')}
          className="text-white text-xl"
        >
          ✕
        </button>
        <h1 className="text-lg font-medium">Ajustes</h1>
        <div className="w-6"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Información general */}
        <div className="mt-4 mb-2 px-4">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Información general
          </h2>
        </div>

        <div className="bg-white divide-y divide-gray-200">
          {/* Créditos */}
          <button
            onClick={() => navigate('/creditos')}
            className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-800">Créditos</span>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Contactar servicio técnico */}
          <button
            onClick={handleContactSupport}
            className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-800">Contactar con el servicio técnico</span>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Recomendar aplicación */}
          <button
            onClick={handleShare}
            className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <span className="text-gray-800">Recomendar aplicación</span>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Distancias */}
        <div className="mt-6 mb-2 px-4">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Distancias
          </h2>
        </div>

        <div className="bg-white divide-y divide-gray-200">
          {/* Millas */}
          <button
            onClick={() => handleDistanceChange('millas')}
            className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
          >
            <span className="text-gray-800">Millas</span>
            {distanceUnit === 'millas' && (
              <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>

          {/* Kilómetros */}
          <button
            onClick={() => handleDistanceChange('km')}
            className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
          >
            <span className="text-gray-800">Kilómetros</span>
            {distanceUnit === 'km' && (
              <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        </div>

        {/* Caché */}
        <div className="mt-6 mb-2 px-4">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Caché
          </h2>
        </div>

        <div className="bg-white">
          <button
            onClick={handleClearCache}
            className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <span className="text-gray-800">Vaciar caché</span>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Enlaces legales */}
        <div className="mt-6 mb-2 px-4">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Legal
          </h2>
        </div>

        <div className="bg-white divide-y divide-gray-200 mb-6">
          {/* Términos */}
          <button
            onClick={() => navigate('/terminos')}
            className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
          >
            <span className="text-gray-800">Términos y condiciones</span>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Privacidad */}
          <button
            onClick={() => navigate('/privacidad')}
            className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
          >
            <span className="text-gray-800">Política de privacidad</span>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Versión */}
        <div className="text-center text-gray-500 text-sm pb-8">
          <p>COBouzas v2.0.0</p>
          <p className="text-xs mt-1">© 2025 Centro Odontológico Bouzas</p>
        </div>
      </div>
    </div>
  )
}

export default Ajustes

