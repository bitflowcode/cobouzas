import { useNavigate } from 'react-router-dom'

const Creditos = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-500 text-white p-4 pt-safe flex items-center justify-between sticky top-0 z-10">
        <button 
          onClick={() => navigate('/ajustes')}
          className="text-white text-3xl font-light leading-none"
          aria-label="Cerrar"
        >
          ✕
        </button>
        <h1 className="text-lg font-medium">Créditos</h1>
        <div className="w-6"></div>
      </div>

      <div className="max-w-4xl mx-auto p-4 md:p-6">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          {/* Logo/Icono */}
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🦷</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Centro Odontológico Bouzas
            </h2>
          </div>

          {/* Contenido */}
          <div className="prose prose-sm md:prose-base max-w-none">
            <p className="text-gray-700 leading-relaxed">
              <strong>Centro Odontológico Bouzas</strong>, de <strong>Rodríguez González María Mercedes</strong>, está para el cuidado de la salud bucal. Aquí podrás conocer y acceder a nuestros servicios, informarte acerca de los tratamientos que puedes tener para mejorar y conservar tu salud bucal. También, esta aplicación es un canal de comunicación con nuestros pacientes actuales y potenciales. En Vigo, tu mejor aliado para conservar tu sonrisa.
            </p>

            {/* Información de contacto */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Información de contacto
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <strong>Titular:</strong> Rodríguez González María Mercedes
                </p>
                <p>
                  <strong>CIF:</strong> R2802436B
                </p>
                <p>
                  <strong>Dirección:</strong> Plaza de Johan Carballeira, N° 6 Bajo - 36208 BOUZAS (Vigo)
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a 
                    href="mailto:admin@dentalbouzas.com" 
                    className="text-teal-600 hover:text-teal-700 underline"
                  >
                    admin@dentalbouzas.com
                  </a>
                </p>
                <p>
                  <strong>Teléfono:</strong>{' '}
                  <a 
                    href="tel:+34986248248" 
                    className="text-teal-600 hover:text-teal-700 underline"
                  >
                    986 248 248
                  </a>
                </p>
              </div>
            </div>

            {/* Versión de la app */}
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Aplicación COBouzas</p>
              <p>Versión 2.0.0</p>
              <p className="mt-2">© 2025 Centro Odontológico Bouzas</p>
              <p>Todos los derechos reservados</p>
            </div>
          </div>

          {/* Botón volver */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => navigate('/ajustes')}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Volver a Ajustes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Creditos

