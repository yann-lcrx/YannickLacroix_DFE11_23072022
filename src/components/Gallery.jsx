import { useState } from "react";
import styles from "../styles/components/Gallery.module.scss";

/**
 * Displays given set of pictures within a slideshow
 * @param {{pictures: string[], alternativeText: string}} props
 * @returns JSX
 */
function Gallery({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelectNextPicture = () => {
    currentIndex < pictures.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(0);
  };

  const handleSelectPreviousPicture = () => {
    currentIndex === 0
      ? setCurrentIndex(pictures.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  const handleKeyboard = (event) => {
    event.key === "ArrowLeft" && handleSelectPreviousPicture();
    event.key === "ArrowRight" && handleSelectNextPicture();
  };

  return (
    <div className={styles.Gallery} role="listbox" aria-label="diaporama">
      <div
        tabIndex={0}
        onKeyUp={handleKeyboard}
        role="option"
        aria-selected="true"
        style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
      >
        {pictures.length > 1 && (
          <>
            <div className={styles.controls}>
              <img
                src="/arrowleft.svg"
                alt="précédente"
                onClick={handleSelectPreviousPicture}
              />
              <img
                src="/arrowright.svg"
                alt="suivante"
                onClick={handleSelectNextPicture}
              />
            </div>
            <p>{`${currentIndex + 1}/${pictures.length}`}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Gallery;
