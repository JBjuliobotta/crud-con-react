import NavBar from "./Components/NavBar.jsx"
import Footer from "./Components/Footer.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Pages/Home.jsx"
import AcercaDeNosotros from "./Components/Pages/AcercaDeNosotros.jsx"
import Administracion from "./Components/Pages/Administracion.jsx"
import CrearProducto from "./Components/Sections/CrearProducto.jsx"

function App() {

  return (
    <>
    <BrowserRouter>
     <header> 
        <NavBar />
      </header>
      <main>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/acercadenosotros" element={<AcercaDeNosotros/>}/>
              <Route path="/administracion" element={<Administracion/>}/>
              <Route path="/crear-producto" element={<CrearProducto/>}/>
          </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>  
    </>
  )
}

export default App
