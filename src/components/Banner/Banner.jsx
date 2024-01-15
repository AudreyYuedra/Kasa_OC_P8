import "./Banner.css"

export default Banner

function Banner({ imageUrl, text, content }) {
   return (
      <figure>
         <h1>{text}</h1>
         <img src={imageUrl} alt={content} />
      </figure>
   )
}
