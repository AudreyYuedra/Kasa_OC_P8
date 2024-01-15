import HousingDatas from "../../datas/HousingDatas.json"
import { Link } from "react-router-dom"
import Card from "../Card/Card.jsx"

import "./Gallery.css"

export default Gallery

function Gallery() {
   return (
      <section>
         {HousingDatas.map((data) => (
            <Link key={data.id} to={`/Logement/${data.id}`}>
               <Card imgUrl={data.cover} title={data.title} />
            </Link>
         ))}
      </section>
   )
}
