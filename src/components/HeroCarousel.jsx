import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import urgenciasBackground from '../assets/urgencias-background.jpg'
import serviciosBackground from '../assets/servicios-background.jpg'
import citasBackground from '../assets/citas-background.jpg'

const HeroCarousel = () => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [autoplayKey, setAutoplayKey] = useState(0) // Key para reiniciar el autoplay
  const containerRef = useRef(null)

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

  // Distancia mínima de swipe (en píxeles)
  const minSwipeDistance = 50

  // Auto-avance del carrusel cada 4 segundos
  // Se reinicia cuando autoplayKey cambia (al hacer swipe manual)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [slides.length, autoplayKey])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setAutoplayKey(prev => prev + 1) // Reiniciar autoplay
  }

  const handleButtonClick = () => {
    slides[currentSlide].action()
  }

  // Touch handlers para móvil
  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setIsDragging(true)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false)
      return
    }
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      // Swipe izquierda = siguiente slide
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setAutoplayKey(prev => prev + 1) // Reiniciar autoplay
    } else if (isRightSwipe) {
      // Swipe derecha = slide anterior
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setAutoplayKey(prev => prev + 1) // Reiniciar autoplay
    }

    setIsDragging(false)
    setTouchStart(null)
    setTouchEnd(null)
  }

  // Mouse handlers para desktop
  const onMouseDown = (e) => {
    setTouchEnd(null)
    setTouchStart(e.clientX)
    setIsDragging(true)
  }

  const onMouseMove = (e) => {
    if (!isDragging) return
    setTouchEnd(e.clientX)
  }

  const onMouseUp = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false)
      return
    }
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setAutoplayKey(prev => prev + 1)
    } else if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setAutoplayKey(prev => prev + 1)
    }

    setIsDragging(false)
    setTouchStart(null)
    setTouchEnd(null)
  }

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      setTouchStart(null)
      setTouchEnd(null)
    }
  }

  return (
    <div 
      ref={containerRef}
      className="relative h-48 md:h-72 lg:h-96 overflow-hidden select-none"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      {/* Slides */}
      <div 
        className={`flex h-full ${isDragging ? 'transition-none' : 'transition-transform duration-500 ease-in-out'}`}
        style={{ 
          transform: `translateX(-${currentSlide * 100}%)`,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 pointer-events-auto">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-red-500' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel