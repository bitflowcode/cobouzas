import { useNavigate } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import NewsCard from '../components/NewsCard'
import { useApi } from '../hooks/useApi'

const Home = () => {
  const navigate = useNavigate()
  const { isConnected, apiUrl } = useApi()

  const newsItems = [
    {
      id: 1,
      icon: "🥗",
      title: "Comer Sano - Consejos de tu dentista",
      bgColor: "bg-green-100"
    },
    {
      id: 2,
      icon: "👶", 
      title: "Consejos de tu dentista",
      bgColor: "bg-blue-100"
    },
    {
      id: 3,
      icon: "📊",
      title: "Infografías sobre salud bucodental", 
      bgColor: "bg-purple-100"
    }
  ]

  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* API Status - Solo visible en desarrollo */}
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-gray-100 p-2 text-center text-xs border-b">
          <span className={`inline-block w-2 h-2 rounded-full mr-2 ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></span>
          API Backend: {isConnected ? '✅ Conectada' : '❌ Desconectada'} ({apiUrl})
        </div>
      )}

      {/* Contenido principal */}
      <div className="space-y-6">
        {/* Novedades */}
        <section className="pt-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 px-4">Novedades</h2>
          <div className="px-4">
            <div className="grid grid-cols-3 gap-3">
              {newsItems.map((item) => (
                <NewsCard
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  bgColor={item.bgColor}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Estética - CLICKEABLE */}
        <section id="servicios-section" className="bg-gray-50 mobile-full-width">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 px-4">Estética</h2>
          <div 
            className="bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => navigate('/estetica')}
          >
            <div className="w-full h-48 bg-gradient-to-r from-orange-100 to-yellow-100 flex items-center justify-center">
              <span className="text-6xl">😁</span>
            </div>
            <div className="p-4">
              <span className="text-xs text-teal-600 font-medium uppercase tracking-wide">Tratamiento</span>
              <h3 className="font-semibold text-gray-800 mt-1">Blanqueamiento dental</h3>
            </div>
          </div>
        </section>

        {/* Implantología oral - CLICKEABLE */}
        <section className="bg-gray-50 mobile-full-width">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 px-4">Implantología oral</h2>
          <div 
            className="bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => navigate('/implantologia')}
          >
            <div className="w-full h-48 bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center">
              <span className="text-6xl">🦷</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">Cirugía e implantes</h3>
            </div>
          </div>
        </section>

        {/* Resto del contenido igual... */}
        <section className="bg-gray-50 mobile-full-width">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 px-4">Dónde estamos</h2>
          <div className="bg-white shadow-sm">
            <div className="w-full h-48 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl block mb-2">🏢</span>
                <span className="text-lg font-bold text-gray-600">BOUZAS</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">Centro Odontológico Bouzas</h3>
              <p className="text-sm text-gray-600 flex items-center mt-1">
                <span className="mr-1">📍</span>Rua Johan Carballeira, 6 - 36208 Vigo
              </p>
              <p className="text-xs text-gray-500 mt-1">465 km</p>
            </div>
          </div>
        </section>

        {/* Footer Links */}
        <div className="pt-4 pb-6 border-t border-gray-200 space-y-2 bg-white mobile-full-width">
          <button className="block w-full text-center py-3 text-gray-600 text-sm">Términos y condiciones</button>
          <button className="block w-full text-center py-3 text-gray-600 text-sm">Política de privacidad</button>
        </div>
      </div>
    </>
  )
}

export default Home