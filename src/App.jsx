import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Layout from './components/Layout'
import InstallPWA from './components/InstallPWA'
import NotificationHandler from './components/NotificationHandler'  // ← NUEVO
import Home from './pages/Home'
import Implantologia from './pages/Implantologia'
import Estetica from './pages/Estetica'
import Citas from './pages/Citas'
import Cuestionario from './pages/Cuestionario'
import Urgencias from './pages/Urgencias'
import Cupones from './pages/Cupones'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import TerminosCondiciones from './pages/TerminosCondiciones'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import Centro from './pages/Centro'
import Ajustes from './pages/Ajustes'
import Creditos from './pages/Creditos'
import Contacto from './pages/Contacto'
import './App.css'
import useNativePushNotifications from './hooks/useNativePushNotifications';

function App() {
  // Inicializar notificaciones nativas (solo en iOS/Android)
  useNativePushNotifications();
  return (
    <Router>
      <ScrollToTop />
      <InstallPWA />
      <NotificationHandler />  {/* ← NUEVO: Gestión de notificaciones push */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Páginas estáticas específicas */}
          <Route path="implantologia" element={<Implantologia />} />
          <Route path="estetica" element={<Estetica />} />
          <Route path="citas" element={<Citas />} />
          <Route path="cuestionario" element={<Cuestionario />} />
          <Route path="urgencias" element={<Urgencias />} />
          <Route path="cupones" element={<Cupones />} />
          <Route path="servicios" element={<Services />} />
          <Route path="centro" element={<Centro />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="ajustes" element={<Ajustes />} />
          <Route path="creditos" element={<Creditos />} />
          <Route path="terminos" element={<TerminosCondiciones />} />
          <Route path="politica-de-privacidad" element={<PoliticaPrivacidad />} />
          {/* Rutas de posts */}
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:slug" element={<PostDetail />} />
          {/* Ruta dinámica para servicios (debe ir al final para no interferir con las estáticas) */}
          <Route path=":slug" element={<ServiceDetail />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App