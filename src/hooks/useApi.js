import { useState, useEffect } from 'react';

// Usar variable de entorno o fallback para desarrollo
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.appdentalbouzas.com';

export const useApi = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(true);

  const testConnection = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/health`);
      const data = await response.json();
      
      if (data.status === 'OK') {
        setIsConnected(true);
        console.log('API COBouzas conectada:', data);
      }
    } catch (error) {
      console.error('Error conectando a API:', error);
      setIsConnected(false);
    } finally {
      setLoading(false);
    }
  };

  const apiRequest = async (endpoint, options = {}) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Error en ${endpoint}:`, error);
      throw error;
    }
  };

  const get = (endpoint) => apiRequest(endpoint);
  const post = (endpoint, data) => apiRequest(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  useEffect(() => {
    testConnection();
  }, []);

  return {
    isConnected,
    loading,
    get,
    post,
    testConnection,
    apiUrl: API_BASE_URL
  };
};

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { get } = useApi();

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await get('/api/posts');
      
      if (response.success) {
        setPosts(response.data);
        console.log('Posts cargados desde BD:', response.data);
      } else {
        console.error('Error en respuesta posts:', response);
      }
    } catch (error) {
      console.error('Error cargando posts:', error);
      setPosts([
        {
          id: 1,
          title: "Comer Sano - Consejos de tu dentista",
          icon: "🥗",
          bg_color: "bg-green-100"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading, fetchPosts };
};

export const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { get } = useApi();

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await get('/api/services');
      
      if (response.success) {
        setServices(response.data);
        console.log('Services cargados desde BD:', response.data);
      } else {
        console.error('Error en respuesta services:', response);
      }
    } catch (error) {
      console.error('Error cargando services:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return { services, loading, fetchServices };
};

export const useSettings = () => {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const { get } = useApi();

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const response = await get('/api/settings');
      
      if (response.success) {
        setSettings(response.data);
        console.log('Settings cargados desde BD:', response.data);
      }
    } catch (error) {
      console.error('Error cargando settings:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return { settings, loading, fetchSettings };
};