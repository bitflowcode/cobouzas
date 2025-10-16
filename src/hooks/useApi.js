import { useState, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { CapacitorHttp } from '@capacitor/core';
import { getApiBaseUrl } from '../config/api';

export const useApi = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(true);

  const testConnection = async () => {
    try {
      const data = await makeHttpRequest(`${getApiBaseUrl()}/api/health`, 'GET');
      
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

  /**
   * Función helper para hacer requests HTTP
   * En nativo: usa CapacitorHttp (sin restricciones CORS)
   * En web: usa fetch (estándar)
   */
  const makeHttpRequest = async (url, method = 'GET', data = null, headers = {}) => {
    const isNative = Capacitor.isNativePlatform();

    if (isNative) {
      // Usar HTTP nativo de Capacitor (sin CORS)
      const options = {
        url,
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      };

      if (data && (method === 'POST' || method === 'PUT')) {
        options.data = data;
      }

      const response = await CapacitorHttp.request(options);
      
      if (response.status >= 400) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.data;
    } else {
      // Usar fetch en web
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      };

      if (data && (method === 'POST' || method === 'PUT')) {
        options.body = JSON.stringify(data);
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    }
  };

  const apiRequest = async (endpoint, options = {}) => {
    const fullUrl = `${getApiBaseUrl()}${endpoint}`;
    
    try {
      const method = options.method || 'GET';
      const data = options.body ? JSON.parse(options.body) : null;
      
      return await makeHttpRequest(fullUrl, method, data, options.headers);
    } catch (error) {
      console.error(`Error en ${endpoint}:`, error.message);
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
    apiUrl: getApiBaseUrl()
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