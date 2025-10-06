import { useNavigate } from 'react-router-dom'

const ServiceCard = ({ service, variant = 'full' }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (service.slug) {
      navigate(`/${service.slug}`)
    }
  }

  // Variante completa para Home (la actual) con márgenes laterales
  if (variant === 'full') {
    return (
      <div className="mx-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {service.name}
        </h2>
        <div 
          className="bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow rounded-lg overflow-hidden"
          onClick={handleClick}
        >
          <div className={`w-full h-48 md:h-64 lg:h-80 bg-gradient-to-r ${service.gradient_from} ${service.gradient_to} flex items-center justify-center overflow-hidden`}>
            {service.featured_image_url ? (
              <img 
                src={service.featured_image_url} 
                alt={service.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Si la imagen falla, mostrar el icono
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  parent.innerHTML = `<span class="text-6xl md:text-7xl lg:text-8xl">${service.icon}</span>`;
                  parent.className = parent.className.replace('overflow-hidden', '');
                }}
              />
            ) : (
              <span className="text-6xl md:text-7xl lg:text-8xl">{service.icon}</span>
            )}
          </div>
          <div className="p-4 md:p-5 lg:p-6">
            <span className="text-xs md:text-sm text-teal-600 font-medium uppercase tracking-wide">
              Tratamiento
            </span>
            <h3 className="font-semibold text-gray-800 mt-1 text-base md:text-lg">
              {service.short_description}
            </h3>
          </div>
        </div>
      </div>
    )
  }

  // Variante tarjeta para listas
  if (variant === 'card') {
    return (
      <div 
        className="bg-white rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow overflow-hidden"
        onClick={handleClick}
      >
        <div className={`w-full h-48 bg-gradient-to-r ${service.gradient_from} ${service.gradient_to} flex items-center justify-center overflow-hidden`}>
          {service.featured_image_url ? (
            <img 
              src={service.featured_image_url} 
              alt={service.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Si la imagen falla, mostrar el icono
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                parent.innerHTML = `<span class="text-4xl text-white">${service.icon}</span>`;
                parent.className = parent.className.replace('overflow-hidden', '');
              }}
            />
          ) : (
            <span className="text-4xl text-white">{service.icon}</span>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2">{service.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{service.short_description}</p>
          <span className="text-xs text-teal-600 font-medium uppercase tracking-wide mt-2 inline-block">
            Tratamiento
          </span>
        </div>
      </div>
    )
  }
}

export default ServiceCard