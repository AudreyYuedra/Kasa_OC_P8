import "./Card.css"

export default Card

function Card({ title, imgUrl }) {
   return (
      <article>
         <div className="content-card">
            <p>{title}</p>
            <div className="opacity-card"></div>
            <img src={imgUrl} alt={`carte ${title}`} />
         </div>
      </article>
   )
}
