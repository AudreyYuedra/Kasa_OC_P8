import Nav from './Nav';
import logo_kasa_color from '../assets/logo_kasa_color.png';


function Header(){
    return (
        <header className="header">
            <img src={logo_kasa_color} alt="Logo Kasa" className="logo-color" />
            <Nav />
        </header>
    )
}

export default Header