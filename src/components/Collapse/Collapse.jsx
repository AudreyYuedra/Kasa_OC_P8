import { useState } from "react"
import Arrow_Collapse from "../../assets/arrow_collapse.png"

import "./Collapse.css"

export default Collapse

function Collapse({ title, content }) {
   const [close, setClose] = useState(true) //état de base du collapse => fermé

   //* Ouvrir ou fermer collapse au clic
   const toggleCollapse = () => {
      setClose(!close) // donc false => ouvert
   }

   return (
      <article className="article-collapse">
         <div className="title-collapse" onClick={toggleCollapse}>
            <span>{title}</span>
            <img src={Arrow_Collapse} alt="flèche ouvrante et fermante" className={`arrow ${close ? "arrow-up" : "arrow-down"}`} />
         </div>

         <div className={close ? "txt-close" : "txt-open"}>
            <span className="txt-collapse">{content}</span>
         </div>
      </article>
   )
}
