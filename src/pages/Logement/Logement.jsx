import HousingDatas from "../../datas/HousingDatas.json"
import { Navigate, useParams } from "react-router-dom"
import Carousel from "../../components/Carousel/Carousel.jsx"
import Tags from "../../components/Tags/Tags.jsx"
import Host from "../../components/Host/Host.jsx"
import Rating from "../../components/Rating/Rating.jsx"
import Collapse from "../../components/Collapse/Collapse.jsx"

import "./Logement.css"

export default Logement

function Logement() {
   //* Récupère param url id
   const { id } = useParams()

   //* Recherche données logement via id fichier json
   const jsonHousing = HousingDatas.find((element) => element.id === id)

   //* Check si logement existe sinon => page error
   if (jsonHousing === undefined) {
      console.log("check ", jsonHousing)
      return <Navigate to="*" />
   }

   //* Récupération liste équipements
   const dataEquipments = jsonHousing.equipments.map((equipment) => (
      <p className="equipement-text" key={equipment}>
         {equipment}
         <br />
      </p>
   ))

   return (
      <main>
         <Carousel images={jsonHousing.pictures} />

         <section>
            <article>
               <div className="infos">
                  <h2>{jsonHousing.title}</h2>
                  <p className="location">{jsonHousing.location}</p>

                  <div className="container-tags">
                     {jsonHousing.tags.map((tag, index) => (
                        <Tags key={index} content={tag} />
                     ))}
                  </div>
               </div>

               <aside>
                  <Host text={jsonHousing.host.name} source={jsonHousing.host.picture} />
                  <Rating rating={jsonHousing.rating} />
               </aside>
            </article>

            <div className="container-collapse">
               <Collapse title="Description" content={jsonHousing.description} />
               <Collapse title="Equipements" content={dataEquipments} />
            </div>
         </section>
      </main>
   )
}
