// components/ImageCard.jsx
import React from 'react';


const ImageCard = ({ src, alt }) => {


  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-2 bg-background">
      <img src={src} alt={alt} className="w-full" />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">Descripción de la imagen</p>
      </div>
    </div>
  );
};

export default ImageCard;
