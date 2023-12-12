import HousingDatas from "../datas/HousingDatas.json";
import { Link } from "react-router-dom";
import Card from "./Card";
import "../styles/App.css";

function Gallery() {
  return (
    <div className="gallery">
      {HousingDatas.map((data) => (
        <Link key={data.id} to={`/Logement/${data.id}`}>
          <Card cover={data.cover} title={data.title} />
        </Link>
      ))}
    </div>
  );
}

export default Gallery;

/*
const [data, setData] = useState([]);
useEffect(() => {
    axios
      .get(HousingDatas) //appel API (ici fichier local)
      .then((response) => setData(response.data)) //requete json pour récup donnée + instancier avec data
      .catch((error) => {
        console.error("Error fetchong data: ", error);
      });
  }, []); //crochet vide => pas de modif ultérieur
*/
