import { useState } from "react";
import Arrow_Right from "../assets/arrow_right.png";
import Arrow_Left from "../assets/arrow_left.png";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1; //si last img = true, si non = false
    const newIndex = isLastSlide ? 0 : currentIndex + 1; //si true reviens à 0
    setCurrentIndex(newIndex);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      {images.length > 1 && (
        <>
          <div className="container-arrows">
            <img
              src={Arrow_Left}
              alt="flèche gauche"
              className="arrow"
              onClick={goToPrevious}
            />
            <img
              src={Arrow_Right}
              alt="flèche droite"
              className="arrow"
              onClick={goToNext}
            />
          </div>
        </>
      )}
      <div className="slide">
        <img
          src={images[currentIndex]}
          alt={`slide ${currentIndex}`}
          className="img-slide"
        />
        {images.length > 1 && (
          <p className="img-count">{`${currentIndex + 1} /${images.length}`}</p>
        )}
      </div>
    </div>
  );
}

export default Carousel;
