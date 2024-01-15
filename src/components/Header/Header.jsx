import logo_kasa_color from "../../assets/logo_kasa_color.png"
import { Link, useLocation } from "react-router-dom"

import "./Header.css"

export default Header

function Header() {
   const location = useLocation() //détermine page actuelle

   return (
      <header>
         <img src={logo_kasa_color} alt="Logo Kasa" className="logo-color" />
         <nav>
            <article>
               <Link to="/" className="links">
                  Accueil
               </Link>
               <div className={location.pathname === "/" ? "focus-page" : ""}></div>
            </article>

            <article>
               <Link to="/About" className="links">
                  A Propos
               </Link>
               <div className={location.pathname === "/About" ? "focus-page" : ""}></div>
            </article>
         </nav>
      </header>
   )
}
