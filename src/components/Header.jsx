import logo_kasa_color from "../assets/logo_kasa_color.png";
import { Link, useLocation } from "react-router-dom";
import "../styles/App.css";

function Header() {
  const location = useLocation(); //détermine page actuelle

  return (
    <header>
      <img src={logo_kasa_color} alt="Logo Kasa" className="logo-color" />
      <nav className="nav">
        <div className="column-nav">
        <Link
          to="/"
          className="links">
          Accueil
        </Link>
        <div className={location.pathname === "/" ? "nav-active" : ""}></div>
        </div>
        <div className="column-nav">
        <Link
          to="/About"
          className="links">
          A Propos
        </Link>
        <div className={location.pathname === "/About" ? "nav-active" : ""}></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;


/* {`links ${location.pathname === "/" ? "nav-active" : ""}`} */