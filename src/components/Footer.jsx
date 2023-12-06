import logo_kasa_white from "../assets/logo_kasa_white.png";

import "../styles/App.css";

function Footer() {
  return (
    <footer>
      <img src={logo_kasa_white} alt="logo Kasa blanc" className="logo-white" />
      <p className="rights">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
