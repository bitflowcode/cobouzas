import { useNavigate } from 'react-router-dom'

const Implantologia = () => {
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
      <div className="w-full h-64 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center relative">
        {/* Simulamos la imagen de implante dental */}
        <div className="text-center text-white">
          <div className="w-32 h-32 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <span className="text-6xl">🦷</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Contenido del artículo */}
      <div className="bg-white px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Cirugía e implantes</h1>
        
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Rama de la odontología encargada de devolver la función, anatomía y estética, alterada por la pérdida de 1 o más dientes.
          </p>
          
          <p>
            Algunas de las cirugías son muy conocidas, como la extracción de las muelas del juicio; y otras menos, como la regeneración ósea guiada, injerto de hueso, ensanchamiento de cresta alveolar o elevación de seno maxilar.
          </p>
        </div>

        {/* Información adicional */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg flex items-start space-x-3">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white text-sm">ℹ</span>
          </div>
          <p className="text-sm text-gray-600">
            Para ser atendido, por favor,
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

export default Implantologia