import Carousel from "../components/Carousel.jsx";
import HousingDatas from "../datas/HousingDatas.json";
import Tags from "../components/Tags.jsx";
import Rating from "../components/Rating.jsx";
import { Navigate, useParams } from "react-router-dom";
import Collapse from "../components/Collapse.jsx";

import "../styles/App.css";

function Logement() {
  //récupère param url id
  const { id } = useParams();

  //recherche données logement via id fichier json
  const jsonHousing = HousingDatas.find((element) => element.id === id);

  //check si logement existe sinon => page error
  if (!jsonHousing) {
    return <Navigate to="/Error" />;
  }

  return (
    <main>
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
              <p className="host-name">{jsonHousing.name}</p>
              <img
                src={jsonHousing.picture}
                alt={jsonHousing.name}
                className="host-photo"
              />
            </div>

            <Rating />
          </div>
        </div>
        <div className="collapse-housing">
          <Collapse title="Description" content={jsonHousing.description} />
          <Collapse title="Equipements" content={jsonHousing.equipements} />
        </div>
      </div>
    </main>
  );
}

export default Logement;
