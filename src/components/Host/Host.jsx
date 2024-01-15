import "./Host.css"

export default Host

function Host({ text, source }) {
   return (
      <article>
         <p>{text}</p>
         <img src={source} alt={text} className="host-photo" />
      </article>
   )
}
