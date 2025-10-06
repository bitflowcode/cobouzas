import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import urgenciasBackground from '../assets/urgencias-background.jpg'
import serviciosBackground from '../assets/servicios-background.jpg'
import citasBackground from '../assets/citas-background.jpg'

const HeroCarousel = () => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Urgencias",
      subtitle: "HACER CONSULTA",
      backgroundImage: urgenciasBackground,
      action: () => {
        navigate('/urgencias')
      }
    },
    {
      id: 2,
      title: "Servicios", 
      subtitle: "SABER MÁS",
      backgroundImage: serviciosBackground,
      action: () => {
        navigate('/servicios')
      }
    },
    {
      id: 3,
      title: "Cita Previa",
      subtitle: "PEDIR CITA", 
      backgroundImage: citasBackground,
      action: () => {
        navigate('/citas')
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
    <div className="relative h-48 md:h-72 lg:h-96 overflow-hidden">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">{slide.title}</h1>
                <button 
                  onClick={handleButtonClick}
                  className="bg-teal-500 hover:bg-teal-600 px-8 py-3 md:px-12 md:py-4 rounded-full font-medium text-base md:text-lg transition-colors"
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