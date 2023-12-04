import { useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useEffect } from "react";

function Container() {
  //state (état ou données)
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("../logements.json") //appel API (ici ficher local)
      .then(
        (response) => setData(response.data) //requete json pour récup donnée + instancier avec data
      );
  }, []); //crochet vide => pas de modif ultérieur

  // comportements

  //affichage (render)
  return (
    //links autour
    <div>
      {data.map(
        (
          appart,
          index //boucle
        ) => (
          <div key={index}>
            <Card source={appart.cover} title={appart.title} />
          </div>
        )
      )}
    </div>
  );
}

export default Container;
