import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import { Link } from "react-router-dom"

import "./Error.css"

export default Error

function Error() {
   return (
      <div>
         <Header />
         <main>
            <span>404</span>
            <p className="txt-error">Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="redirection">
               <p>Retourner sur la page d'accueil</p>
            </Link>
         </main>
         <Footer />
      </div>
   )
}
