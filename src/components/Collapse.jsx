import { useState } from "react";
import Arrow_Collapse from "../assets/arrow_collapse.png";
import "../styles/App.css";

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false); //état de base du collapse fermé

  //comportement
  //* ouvrir ou fermer collapse au clic sur flèche + rotation flèche
  const toggleCollapse = () => {
    setOpen(!open);
    console.log(open);
  };

  //render
  return (
    <div className="collapse">
      <div className="title-collapse">
        <p>{title}</p>
        <img
          onClick={toggleCollapse}
          src={Arrow_Collapse}
          alt="flèche ouvrante et fermante"
          className={`arrow-collapse ${open ? "arrow-up" : "arrow-down"}`} // true 1ère value et false 2ns valeur
        />
      </div>
      <p className={`txt-collapse ${open ? "txt-close" : "txt-open"}`}>
        {content}
      </p>
    </div>
  );
}

export default Collapse;
