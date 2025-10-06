import { useNavigate } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import NewsCard from '../components/NewsCard'
import ServiceCard from '../components/ServiceCard'
import { useApi, usePosts, useServices } from '../hooks/useApi'

const Home = () => {
  const navigate = useNavigate()
  const { isConnected, apiUrl } = useApi()
  const { posts, loading: postsLoading } = usePosts()
  const { services, loading: servicesLoading } = useServices()

  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* API Status - Solo visible en desarrollo */}
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-gray-100 p-2 text-center text-xs border-b">
          <span className={`inline-block w-2 h-2 rounded-full mr-2 ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></span>
          API Backend: {isConnected ? 'Conectada' : 'Desconectada'} ({apiUrl})
        </div>
      )}

      {/* Contenido principal */}
      <div className="space-y-6">
        {/* Novedades - DINÁMICAS */}
        <section className="pt-6 bg-gray-50">
          <div className="flex justify-between items-center mb-4 px-4">
            <h2 className="text-xl font-semibold text-gray-800">Novedades</h2>
            {posts.length > 0 && (
              <button
                onClick={() => navigate('/posts')}
                className="text-sm text-teal-600 font-medium hover:text-teal-700"
              >
                Ver todos
              </button>
            )}
          </div>
          <div className="px-4">
            {postsLoading ? (
              <div className="text-center py-4">
                <span className="text-gray-500">Cargando novedades...</span>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <div className="text-4xl mb-2">📄</div>
                <p>No hay novedades disponibles</p>
              </div>
            ) : (
              <div className="w-full overflow-hidden">
                <div className="flex overflow-x-auto gap-3 md:gap-4 pb-2 scrollbar-hide md:justify-center md:flex-wrap md:overflow-visible">
                  {posts.slice(0, 5).map((item) => (
                    <div key={item.id} className="flex-shrink-0 w-32 md:w-48 lg:w-56">
                      <NewsCard
                        icon={item.icon}
                        title={item.title}
                        bgColor={item.bg_color}
                        slug={item.slug}
                        post={item}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

      {/* Servicios - DINÁMICOS con componente ServiceCard */}
      {servicesLoading ? (
          <div className="text-center py-8">
            <span className="text-gray-500">Cargando servicios...</span>
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <div className="text-4xl mb-2">🦷</div>
            <p>No hay servicios disponibles</p>
          </div>
        ) : (
          <div className="space-y-6 px-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Nuestros Servicios</h2>
              <button
                onClick={() => navigate('/servicios')}
                className="text-sm text-teal-600 font-medium hover:text-teal-700"
              >
                Ver todos
              </button>
            </div>
            <div className="space-y-4">
              {services
                .sort((a, b) => (a.order_index || 0) - (b.order_index || 0))
                .slice(0, 3)
                .map((service) => (
                  <ServiceCard key={service.id} service={service} variant="full" />
                ))
              }
            </div>
          </div>
        )}

        {/* Dónde estamos - ESTÁTICO (OK) */}
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