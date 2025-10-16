import { useNavigate } from 'react-router-dom'
import { useShare } from '../hooks/useShare'
import frenteImage from '../assets/frente-centro-odontologico-bouzas.jpeg'

const Centro = () => {
  const navigate = useNavigate()
  const { share } = useShare()

  const handleDirecciones = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=42.22310827929633,-8.752053817730409', '_blank')
  }

  const handleCall = () => {
    window.location.href = 'tel:+34986248248'
  }

  const handleEmail = () => {
    window.location.href = 'mailto:admin@dentalbouzas.com'
  }

  const handleShare = async () => {
    const result = await share({
      title: 'Centro Odontológico Bouzas',
      text: 'Centro Odontológico Bouzas - Rúa Johan Carballeira, 6 Bajo, 36208 Bouzas, Vigo. Tel: 986 248 248',
      url: 'https://www.appdentalbouzas.com/centro'
    })

    // Si se usó clipboard, mostrar mensaje
    if (result.success && result.method !== 'native') {
      alert(result.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-500 text-white p-4 pt-safe flex items-center justify-between sticky top-0 z-10">
        <button 
          onClick={() => navigate('/')}
          className="text-white text-xl"
        >
          ✕
        </button>
        <h1 className="text-lg font-medium">Información</h1>
        <button
          onClick={handleShare}
          className="text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Imagen del frente */}
        <div className="w-full">
          <img
            src={frenteImage}
            alt="Centro Odontológico Bouzas"
            className="w-full h-48 md:h-64 object-cover"
          />
        </div>

        {/* Información principal */}
        <div className="bg-white p-4 md:p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Centro Odontológico Bouzas
          </h2>
          <div className="flex items-start text-gray-600 mb-4">
            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Rúa Johan Carballeira, 6 Bajo - 36208 Bouzas, Vigo</span>
          </div>

          {/* Botón de direcciones */}
          <button
            onClick={handleDirecciones}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-medium mb-6 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            DIRECCIONES
          </button>

          {/* Bienvenida */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Bienvenido a Dental Bouzas
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Puedes pedir tu cita o llamarnos por teléfono.
            </p>
          </div>

          {/* Horario */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-700 uppercase mb-2">
              Horario continuado, de Lunes a Viernes
            </h3>
            <p className="text-gray-800 text-lg">
              De 9:00 a 17:00 horas.
            </p>
          </div>

          {/* Nota importante */}
          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <div className="flex">
              <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-gray-700">
                Para ser atendido, por favor,
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mb-6">
            <p className="text-teal-600 font-medium text-lg mb-4">
              RESERVE SU CITA PREVIA
            </p>
          </div>

          {/* Botones de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <button
              onClick={handleCall}
              className="flex items-center justify-center px-6 py-3 border-2 border-teal-500 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              986 248 248
            </button>
            <button
              onClick={handleEmail}
              className="flex items-center justify-center px-6 py-3 border-2 border-teal-500 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ENVIAR UN EMAIL
            </button>
          </div>
        </div>

        {/* Mapa de Google */}
        <div className="w-full bg-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2318.1280015447305!2d-8.754167817730409!3d42.22310827929633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f61f91550ce13%3A0x16a86f1383eb9fb0!2sR%C3%BAa%20Johan%20Carballeira%2C%206%2C%20Coia%2C%2036208%20Vigo%2C%20Pontevedra!5e0!3m2!1ses!2ses!4v1759788896927!5m2!1ses!2ses" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Centro Odontológico Bouzas"
          />
        </div>
      </div>
    </div>
  )
}

export default Centro