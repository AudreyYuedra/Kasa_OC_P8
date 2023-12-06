import logo_kasa_color from "../assets/logo_kasa_color.png";
import { Link } from "react-router-dom";
import "../styles/App.css";

function Header() {
  return (
    <header>
      <img src={logo_kasa_color} alt="Logo Kasa" className="logo-color" />
      <nav className="nav">
        <Link to="/" className="links">
          Accueil
        </Link>
        <Link to="/About" className="links">
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
