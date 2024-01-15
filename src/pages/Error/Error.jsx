import { Link } from "react-router-dom"
import "./Error.css"

export default Error

function Error() {
   return (
      <main>
         <span>404</span>
         <p className="txt-error">Oups ! La page que vous demandez n'existe pas.</p>
         <Link to="/" className="redirection">
            <p>Retourner sur la page d'accueil</p>
         </Link>
      </main>
   )
}
