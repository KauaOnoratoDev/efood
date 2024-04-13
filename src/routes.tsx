import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CardapioComponent from './pages/Cardapio'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<CardapioComponent />} />
  </Routes>
)

export default Rotas
