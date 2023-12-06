import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HousingDatas from "../datas/HousingDatas.json";
import "../styles/App.css";

function Gallery() {
  //state (état ou données)
  const [data, setData] = useState([]);

  // comportements
  useEffect(() => {
    axios
      .get(HousingDatas) //appel API (ici ficher local)
      .then((response) => setData(response.data)) //requete json pour récup donnée + instancier avec data
      .catch((error) => {
        console.error("Error fetchong data: ", error);
      });
  }, []); //crochet vide => pas de modif ultérieur

  //affichage (render)
  return (
    <div className="gallery">
      {/* boucle avec map*/}
      {data.map((logement) => (
        <div key={logement.id} className="card">
          {/* carte individuelle */}
          <Link to={logement.id}>
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
