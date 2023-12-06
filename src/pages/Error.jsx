import { Link } from "react-router-dom";
import "../styles/App.css";

function Error() {
  return (
    <div className="error">
      <span className="nb-error">404</span>
      <p className="txt-error">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">
        <p className="redirection">Retourner sur la page d'accueil</p>
      </Link>
    </div>
  );
}

export default Error;
