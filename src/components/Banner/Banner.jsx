import "./Banner.css"

export default Banner

function Banner({ imageUrl, text, content }) {
   return (
      <figure className="figure-banner">
         <h1>{text}</h1>
         <img src={imageUrl} alt={content} className="img-banner" />
      </figure>
   )
}
