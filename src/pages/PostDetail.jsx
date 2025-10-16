import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useApi } from '../hooks/useApi'
import { useShare } from '../hooks/useShare'

const PostDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { get } = useApi()
  const { share } = useShare()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true)
        const response = await get(`/api/posts/${slug}`)
        
        if (response.success) {
          setPost(response.data)
        } else {
          throw new Error('Post no encontrado')
        }
      } catch (err) {
        console.error('Error fetching post:', err)
        setError('Error al cargar el post')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchPost()
    }
  }, [slug])

  const handleShare = async () => {
    if (!post) return

    const result = await share({
      title: post.title,
      text: post.excerpt || `${post.title} - Centro Odontológico Bouzas`,
      url: `https://www.appdentalbouzas.com/posts/${slug}`
    })

    // Si se usó clipboard (desktop), mostrar mensaje
    if (result.success && result.method !== 'native') {
      alert(result.message)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-500">Cargando post...</div>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            {error || 'Post no encontrado'}
          </h1>
          <p className="text-gray-600 mb-6">
            El post que buscas no existe o ha sido eliminado.
          </p>
          <button
            onClick={() => navigate('/posts')}
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Ver todos los posts
          </button>
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
            onClick={() => navigate(-1)}
            className="text-blue-600 text-sm font-medium flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="text-teal-600 text-sm font-medium flex items-center"
              title="Compartir post"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Compartir
            </button>
            <button
              onClick={() => navigate('/posts')}
              className="text-teal-600 text-sm font-medium"
            >
              Ver todos
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto md:p-4">
        <article className="bg-white md:rounded-lg md:shadow-sm overflow-hidden">
          {/* Header del post */}
          <div className="p-4 md:p-6 border-b border-gray-200">
            <div className="w-full">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(post.created_at).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                
                {post.category && (
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                )}
                
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {post.views || 0} vistas
                </span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {(post.featured_image_url || post.featured_image) && (
            <div className="w-full">
              <img
                src={post.featured_image_url || post.featured_image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
          )}

          {/* Excerpt */}
          {post.excerpt && (
            <div className="p-4 md:p-6 border-b border-gray-200 bg-gray-50">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                {post.excerpt}
              </p>
            </div>
          )}

          {/* Content */}
          <div className="p-4 md:p-6">
            <div className="prose prose-lg max-w-none">
            {post.content ? (
              <div 
                className="text-gray-800 leading-relaxed prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
                <div className="text-center py-8 text-gray-500">
                  <div className="text-4xl mb-2">📄</div>
                  <p>Este post aún no tiene contenido detallado.</p>
                </div>
              )}
            </div>
          </div>

          {/* Footer del post */}
          <div className="p-4 md:p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <span>Centro Odontológico Bouzas</span>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={handleShare}
                  className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700 transition-colors flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Compartir
                </button>
                <button
                  onClick={() => navigate('/citas')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                >
                  Pedir cita
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Posts relacionados */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Otras novedades
          </h3>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <button
              onClick={() => navigate('/posts')}
              className="w-full text-center py-6 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <div className="text-3xl mb-2">📱</div>
              <span className="text-sm font-medium">Ver todas las novedades</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetail