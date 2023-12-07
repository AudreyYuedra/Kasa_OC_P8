import { useState } from "react";
import { useEffect } from "react";
import Arrow_Collapse from "../assets/arrow_collapse.png";
import "../styles/App.css";

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false); //état de base du collapse fermé
  const [rotation, setRotation] = useState(""); //état de rotation de la flèche

  //comportement
  //* ouvrir ou fermer collapse au clic sur flèche + rotation flèche
  useEffect(() => {
    const toggleCollapse = document.getElementById("toggleCollapse");
    const arrowCollapse = document.getElementById("arrowCollapse");
    const contentCollapse = document.getElementById("contentCollapse");

    toggleCollapse.addEventListener(() => {
      //* si collapse fermée
      if ((setOpen(!open), setRotation(rotation))) {
        //* ouverture
        contentCollapse.classList.remove("txt-close");
        contentCollapse.classList.add("txt-open");
        //* rotation en bas
        arrowCollapse.classList.remove("arrow-up");
        arrowCollapse.classList.add("arrow-down");
      }
      //* si collapse ouverte
      if ((setOpen(open), setRotation(rotation))) {
        //* fermeture
        contentCollapse.classList.remove("txt-open");
        contentCollapse.classList.add("txt-close");
        //* rotation en bas
        arrowCollapse.classList.remove("arrow-down");
        arrowCollapse.classList.add("arrow-up");
      }
    });
  });

  //render
  return (
    <div className="collapse">
      <div className="title-collapse" id="toggleCollapse">
        <p>{title}</p>
        <img
          src={Arrow_Collapse}
          alt="flèche ouvrante et fermante"
          className="arrow-collapse arrow-up"
          id="arrowCollapse"
        />
      </div>
      <p id="contentCollapse" className="txt-collapse txt-close">
        {content}
      </p>
    </div>
  );
}

export default Collapse;
