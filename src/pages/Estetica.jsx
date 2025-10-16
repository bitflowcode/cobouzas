import { useNavigate } from 'react-router-dom'

const Estetica = () => {
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
        <div className="flex items-center space-x-2">
          <span className="text-sm">💬</span>
          <span className="text-sm">📤</span>
          <span className="text-sm">A-</span>
          <span className="text-sm">A+</span>
        </div>
      </div>

      {/* Imagen principal */}
      <div className="w-full h-64 bg-gradient-to-r from-orange-400 to-yellow-400 flex items-center justify-center">
        <div className="text-center">
          <span className="text-8xl">😁</span>
        </div>
      </div>

      {/* Contenido del artículo */}
      <div className="bg-white px-6 py-8">
        <div className="mb-4">
          <span className="text-xs text-teal-600 font-medium uppercase tracking-wide">Tratamiento</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Blanqueamiento dental</h1>
        
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            El blanqueamiento dental es uno de los tratamientos de estética dental más demandados, ya que permite conseguir una sonrisa más blanca y luminosa de forma sencilla y eficaz.
          </p>
          
          <p>
            Este procedimiento elimina las manchas y decoloraciones que se acumulan en los dientes debido al consumo de café, té, vino, tabaco u otros factores que pueden afectar el color natural de la dentadura.
          </p>

          <p>
            En nuestro centro utilizamos técnicas seguras y profesionales que respetan el esmalte dental y garantizan resultados duraderos y naturales.
          </p>
        </div>

        {/* Información adicional */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg flex items-start space-x-3">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white text-sm">ℹ</span>
          </div>
          <p className="text-sm text-gray-600">
            Para más información sobre nuestros tratamientos de estética dental, por favor,
          </p>
        </div>

        {/* Botón CTA */}
        <div className="mt-8 text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors flex items-center justify-center mx-auto space-x-2">
            <span>👉</span>
            <span>RESERVE SU CITA PREVIA</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Estetica