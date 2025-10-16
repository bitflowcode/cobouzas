import { useNavigate } from 'react-router-dom'
import { usePosts } from '../hooks/useApi'

const Posts = () => {
  const navigate = useNavigate()
  const { posts, loading } = usePosts()

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-500">Cargando posts...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10 pt-safe">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 text-sm font-medium"
          >
            ← Volver
          </button>
          <h1 className="text-lg font-semibold text-gray-800">Novedades</h1>
          <div className="w-16"></div> {/* Spacer */}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {posts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No hay posts disponibles</p>
          </div>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(`/posts/${post.slug}`)}
            >
              <div className="flex items-start space-x-3">
                {/* Thumbnail/Icon - Mostrar imagen si existe, sino icono */}
                {post.featured_image_url || post.featured_image ? (
                  <img
                    src={post.featured_image_url || post.featured_image}
                    alt={post.title}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    onError={(e) => {
                      // Si falla la imagen, mostrar icono
                      e.currentTarget.style.display = 'none'
                      const iconDiv = e.currentTarget.nextElementSibling
                      if (iconDiv) iconDiv.style.display = 'flex'
                    }}
                  />
                ) : null}
                <div 
                  className={`w-16 h-16 ${post.bg_color || 'bg-gray-100'} rounded-lg flex items-center justify-center flex-shrink-0 ${(post.featured_image_url || post.featured_image) ? 'hidden' : ''}`}
                  style={{ display: (post.featured_image_url || post.featured_image) ? 'none' : 'flex' }}
                >
                  <span className="text-2xl">{post.icon || '📄'}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="flex items-center text-xs text-gray-500 space-x-2">
                    {post.category && (
                      <span className="bg-gray-100 px-2 py-1 rounded">
                        {post.category}
                      </span>
                    )}
                    <span>
                      {new Date(post.created_at).toLocaleDateString('es-ES')}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Posts