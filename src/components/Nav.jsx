import { Link } from "react-router-dom";


function Nav() {
    return (
        <nav className="nav">
            <Link to="/">Accueil</Link>
            <Link to="/About">A Propos</Link>
        </nav>
    )
}

export default Nav;