import Carousel from "../components/Carousel.jsx";
import HousingDatas from "../datas/HousingDatas.json";
import Tags from "../components/Tags.jsx";
import Rating from "../components/Rating.jsx";
import { Navigate, useParams } from "react-router-dom";
import Collapse from "../components/Collapse.jsx";

import "../styles/App.css";
import "../styles/Logement.css";

function Logement(content) {
  //récupère param url id
  const { id } = useParams();

  //recherche données logement via id fichier json
  const jsonHousing = HousingDatas.find((element) => element.id === id);
  //récupération liste équipements
  const dataEquipments = jsonHousing.equipments.map((equipment) => (
    <p className="equipement-text" key={equipment}>
          {equipment}
          <br />
    </p>))

  //check si logement existe sinon => page error
  if (!jsonHousing) {
    return <Navigate to="/Error" />;
  }

  return (
    <main className="main-logement">
      <Carousel images={jsonHousing.pictures} />

      <div className="container-housing">
        <div className="main-infos">
          <div className="container-infos">
            <h2 className="housing-title">{jsonHousing.title}</h2>
            <p className="location">{jsonHousing.location}</p>

            <div className="container-tags">
              {jsonHousing.tags.map((tag, index) => (
                <Tags key={index} content={tag} />
              ))}
            </div>
          </div>

          <div className="aside-infos">
            <div className="container-host">
              <p className="host-name">{jsonHousing.host.name}</p>
              <img
                src={jsonHousing.host.picture}
                alt={jsonHousing.host.name}
                className="host-photo"
              />
            </div>

            <Rating rating={jsonHousing.rating} />
          </div>
        </div>
        <div className="collapse-housing">
          <Collapse title="Description" content={jsonHousing.description} />
          <Collapse
            title="Equipements"
            content={dataEquipments}
          />
        </div>
      </div>
    </main>
  );
}

export default Logement;
