import { useState } from "react"
import Arrow_Right from "../../assets/arrow_right.png"
import Arrow_Left from "../../assets/arrow_left.png"

import "./Carousel.css"

export default Carousel

function Carousel({ images }) {
   const [currentIndex, setCurrentIndex] = useState(0)

   //* Défilement vers l'avant + infini
   const goToNext = () => {
      const isLastSlide = currentIndex === images.length - 1 //si last img = true, si non = false
      const newIndex = isLastSlide ? 0 : currentIndex + 1 //si true reviens à 0
      setCurrentIndex(newIndex)
   }

   //* Défilement vers l'arrière + infini
   const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0
      const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
   }

   return (
      <figure className="figure-carousel">
         {images.length > 1 && (
            <>
               <div className="container-arrows">
                  <img src={Arrow_Left} alt="flèche gauche" className="arrow-carousel" onClick={goToPrevious} />
                  <img src={Arrow_Right} alt="flèche droite" className="arrow-carousel" onClick={goToNext} />
               </div>
            </>
         )}

         <div className="slide">
            <img src={images[currentIndex]} alt={`slide ${currentIndex}`} className="img-slide" />
            {images.length > 1 && <figcaption>{`${currentIndex + 1} /${images.length}`}</figcaption>}
         </div>
      </figure>
   )
}
