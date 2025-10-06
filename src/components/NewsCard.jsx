import { useNavigate } from 'react-router-dom'

const NewsCard = ({ icon, title, bgColor = "bg-gray-100", slug, post }) => {
  console.log('🃏 NewsCard recibe post:', post);
  const navigate = useNavigate()

  const handleClick = () => {
    if (slug) {
      navigate(`/posts/${slug}`)
    } else {
      // Fallback para posts sin slug - navegar a lista de posts
      navigate('/posts')
    }
  }

  return (
    <div 
      className="bg-white rounded-lg shadow-sm p-3 md:p-4 cursor-pointer hover:shadow-md transition-shadow w-full h-32 md:h-44 lg:h-48 flex flex-col"
      onClick={handleClick}
    >
      <div className={`w-full h-16 md:h-28 lg:h-32 rounded mb-3 flex items-center justify-center flex-shrink-0 overflow-hidden ${!post?.featured_image && !post?.featured_image_url ? bgColor : ''}`}>
        {post?.featured_image || post?.featured_image_url ? (
          <img 
            src={post.featured_image || post.featured_image_url} 
            alt={title}
            className="w-full h-full object-cover rounded"
            onError={(e) => {
              // Si la imagen falla, mostrar icono con color de fondo
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              parent.className = parent.className + ` ${bgColor}`;
              const iconSpan = document.createElement('span');
              iconSpan.className = 'text-3xl md:text-5xl';
              iconSpan.textContent = icon || '📄';
              parent.appendChild(iconSpan);
            }}
          />
        ) : (
          <span className="text-3xl md:text-5xl">{icon || '📄'}</span>
        )}
      </div>
      <p className="text-xs md:text-sm text-gray-600 leading-tight text-left line-clamp-2 flex-1">{title}</p>
    </div>
  )
}

export default NewsCard