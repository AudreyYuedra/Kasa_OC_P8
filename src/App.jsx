import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header.jsx"
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import Logement from "./pages/Logement/Logement.jsx"
import Error from "./pages/Error/Error.jsx"
import Footer from "./components/Footer/Footer.jsx"

import "./App.css"

export default App

function App() {
   return (
      <div className="center">
         <Header />

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Logement/:id" element={<Logement />} />
            <Route path="*" element={<Error />} />
         </Routes>

         <Footer />
      </div>
   )
}
