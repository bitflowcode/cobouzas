import { useNavigate } from 'react-router-dom'

const Citas = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header con botón back */}
      <div className="bg-teal-500 text-white p-4 pt-safe flex items-center justify-between flex-shrink-0">
        <button 
          onClick={() => navigate('/')}
          className="text-white text-xl"
        >
          ✕
        </button>
        <h1 className="text-lg font-medium">Pedir Cita</h1>
        <div className="w-6"></div>
      </div>

      {/* Formulario Jotform - Ocupa toda la altura restante sin márgenes */}
      <div className="flex-1">
        <iframe 
          src="https://form.jotform.com/203043507089048" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0"
          title="Formulario de Cita Previa"
          className="w-full h-full"
          style={{ height: 'calc(100vh - 64px)' }}
        >
          Cargando formulario...
        </iframe>
      </div>
    </div>
  )
}

export default Citas