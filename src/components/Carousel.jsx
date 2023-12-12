import { useState } from "react";

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
          <button onClick={goToPrevious}>&lt;</button>
          <button onClick={goToNext}>&gt;</button>
        </>
      )}
      <div className="slide">
        <img src={images[currentIndex]} alt={`slide ${currentIndex}`} />
        {images.length > 1 && <p>{`${currentIndex + 1} /${images.length}`}</p>}
      </div>
    </div>
  );
}

export default Carousel;
