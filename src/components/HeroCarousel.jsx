import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const HeroCarousel = () => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Urgencias",
      subtitle: "HACER CONSULTA",
      background: "bg-gradient-to-r from-red-400 to-red-600",
      action: () => {
        // Por ahora, mostrar alerta - después conectaremos con Jotform
        alert('Próximamente: Formulario de urgencias')
      }
    },
    {
      id: 2,
      title: "Servicios", 
      subtitle: "SABER MÁS",
      background: "bg-gradient-to-r from-blue-400 to-blue-600",
      action: () => {
        // Scroll a la sección de servicios en la misma página
        document.getElementById('servicios-section')?.scrollIntoView({ 
          behavior: 'smooth' 
        })
      }
    },
    {
      id: 3,
      title: "Cita Previa",
      subtitle: "PEDIR CITA", 
      background: "bg-gradient-to-r from-green-400 to-green-600",
      action: () => {
        // Por ahora, mostrar alerta - después conectaremos con Jotform
        alert('Próximamente: Formulario de cita previa')
      }
    }
  ]

  // Auto-avance del carrusel cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const handleButtonClick = () => {
    slides[currentSlide].action()
  }

  return (
    <div className="relative h-48 overflow-hidden">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`min-w-full h-full ${slide.background} relative`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-2xl font-bold mb-4">{slide.title}</h1>
                <button 
                  onClick={handleButtonClick}
                  className="bg-teal-500 hover:bg-teal-600 px-8 py-3 rounded-full font-medium transition-colors"
                >
                  {slide.subtitle}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-red-500' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel