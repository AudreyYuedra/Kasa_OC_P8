import "./Card.css"

export default Card

function Card({ title, imgUrl }) {
   return (
      <article className="article-card">
         <p className="title-card">{title}</p>
         <div className="opacity-card"></div>
         <img src={imgUrl} alt={`carte ${title}`} className="img-card" />
      </article>
   )
}
