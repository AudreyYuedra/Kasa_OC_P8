import "./Host.css"

export default Host

function Host({ text, source }) {
   return (
      <article className="article-host">
         <p className="txt-host">{text}</p>
         <img src={source} alt={text} className="img-host" />
      </article>
   )
}
