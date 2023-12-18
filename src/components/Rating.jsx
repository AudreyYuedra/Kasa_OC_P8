//import HousingDatas from "../datas/HousingDatas.json";
import "../styles/Logement.css";

function Rating({ rating }) {
  const stars = [];

  //générer étoile par rapport rating
  for (let i = 1; i <= 5; i++) {
    //choisi css par rapport rating
    const starClass =
      i <= rating
        ? "fa-solid fa-star star-active"
        : "fa-solid fa-star star-inactive"; // true 1ère value et false 2nd valeur
    //ajout étoile avec class correspondante selon boucle et tableau
    stars.push(<i key={i} className={starClass}></i>);
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;
