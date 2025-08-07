import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Implantologia from './pages/Implantologia'
import Estetica from './pages/Estetica'
import Citas from './pages/Citas'
import Cupones from './pages/Cupones'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        {/* Páginas de detalle sin layout */}
        <Route path="/implantologia" element={<Implantologia />} />
        <Route path="/estetica" element={<Estetica />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/cupones" element={<Cupones />} />
      </Routes>
    </Router>
  )
}

export default App