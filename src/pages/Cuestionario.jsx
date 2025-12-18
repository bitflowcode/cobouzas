import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Cuestionario = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Cargar el script de Jotform para el manejo del embed
    const script = document.createElement('script')
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-201296535229053']", "https://form.jotform.com/")
      }
    }

    return () => {
      // Limpiar el script al desmontar el componente
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header con botón back */}
      <div className="bg-teal-500 text-white p-4 pt-safe flex items-center justify-between flex-shrink-0">
        <button 
          onClick={() => navigate('/')}
          className="text-white text-3xl font-light leading-none"
          aria-label="Cerrar"
        >
          ✕
        </button>
        <h1 className="text-lg font-medium">Cuestionario</h1>
        <div className="w-6"></div>
      </div>

      {/* Formulario Jotform - Ocupa toda la altura restante sin márgenes */}
      <div className="flex-1">
        <iframe
          id="JotFormIFrame-201296535229053"
          title="ADVERTENCIA LEGAL PARA PACIENTES"
          onLoad={() => window.parent.scrollTo(0,0)}
          allowTransparency="true"
          allow="geolocation; microphone; camera; fullscreen; payment"
          src="https://form.jotform.com/ed911/advertencia-legal-para-pacientes"
          frameBorder="0"
          className="w-full h-full"
          style={{ minWidth: '100%', maxWidth: '100%', height: 'calc(100vh - 64px)', border: 'none' }}
          scrolling="no"
        >
          Cargando formulario...
        </iframe>
      </div>
    </div>
  )
}

export default Cuestionario

