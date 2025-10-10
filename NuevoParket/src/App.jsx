// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Productos from "./pages/Productos";
import Proyectos from "./pages/Proyectos";
import Inspiracion from "./pages/Inspiracion";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quienes-somos" element={<QuienesSomos />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/inspiracion" element={<Inspiracion />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}

export default App;
