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
      .get(HousingDatas) //appel API (ici fichier local)
      .then((response) => setData(response.data)) //requete json pour récup donnée + instancier avec data
      .catch((error) => {
        console.error("Error fetchong data: ", error);
      });
  }, []); //crochet vide => pas de modif ultérieur

  return (
    <div className="gallery">
      {/* boucle avec map*/}
      {data.map((HousingDatas) => (
        <div key={HousingDatas.id} className="card">
          <Link to={`/Logement/${HousingDatas.id}`}>
            <img imageUrl={HousingDatas.cover} alt={HousingDatas.title} />
            <div className="bg-title">
              <p>{HousingDatas.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
