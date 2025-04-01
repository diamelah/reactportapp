import React, { useState, useEffect } from 'react';

const ImagenDNI = ({ alt }) => {
  const [documents, setDocuments] = useState([]);

  const fetchDocuments = async () => {
    try {
      const response = await fetch('api/api/documents/list');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setDocuments(data);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

    return (
    <>
      {documents.link_frente > 0 && (
        <div className="max-w-sm rounded overflow-hidden shadow-lg my-2 -background">
          <img id="frontimage" src={documents.link_frente} alt={alt} className="w-full" />
        </div>
      )}
    </>
  );
};

export default ImagenDNI;
