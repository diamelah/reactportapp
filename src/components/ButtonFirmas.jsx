import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faMinus, faRotateRight, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ButtonFirmas = ({ prevDocument, nextDocument }) => {
  const [currentZoom, setCurrentZoom] = useState(1);
  const [currentRotation, setCurrentRotation] = useState(0);

  const zoomIn = () => {
    setCurrentZoom(prevZoom => prevZoom * 1.25);
  };

  const zoomOut = () => {
    setCurrentZoom(prevZoom => prevZoom / 1.25);
  };

  const rotateRight = () => {
    setCurrentRotation(prevRotation => prevRotation + 90);
  };

  useEffect(() => {
    const image = document.getElementById('frontimage');
    if (image) {
      image.style.transform = `scale(${currentZoom}) rotate(${currentRotation}deg)`;
    }
  }, [currentZoom, currentRotation]);

  return (
    <div className="controls flex justify-center space-x-4">
      <button
        type="button"
        className="px-4 py-2 text-xs font-medium rounded-lg shadow-lg border-2 border-text text-text transition-colors hover:bg-primary hover:text-white hover:border-primary text-center mr-2 mb-2"
        onClick={zoomIn}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <button
        type="button"
        className="px-4 py-2 text-xs font-medium rounded-lg shadow-lg border-2 border-text text-text transition-colors hover:bg-primary hover:text-white hover:border-primary text-center mr-2 mb-2"
        onClick={zoomOut}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <button
        type="button"
        className="px-4 py-2 text-xs font-medium rounded-lg shadow-lg border-2 border-text text-text transition-colors hover:bg-primary hover:text-white hover:border-primary text-center mr-2 mb-2"
        onClick={rotateRight}>
        Rotar
        <FontAwesomeIcon icon={faRotateRight} />
      </button>
      <button
        type="button"
        className="px-4 py-2 text-xs font-medium rounded-lg shadow-lg border-2 border-text text-text transition-colors hover:bg-primary hover:text-white hover:border-primary text-center mr-2 mb-2"
        onClick={prevDocument}>
        <FontAwesomeIcon icon={faArrowLeft} /> DNI
      </button>
      <button
        type="button"
        className="px-4 py-2 text-xs font-medium rounded-lg shadow-lg border-2 border-text text-text transition-colors hover:bg-primary hover:text-white hover:border-primary text-center mr-2 mb-2"
        onClick={nextDocument}>
        <FontAwesomeIcon icon={faArrowRight} /> DNI
      </button>
    </div>
  );
};

export default ButtonFirmas;
