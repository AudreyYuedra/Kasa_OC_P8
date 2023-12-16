import { Link } from "react-router-dom";
import "../styles/Error.css";

function Error() {
  return (
    <main className="main-error">
      <p className="nb-error">404</p>
      <p className="txt-error">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="redirection">
        <p>Retourner sur la page d'accueil</p>
      </Link>
    </main>
  );
}

export default Error;
