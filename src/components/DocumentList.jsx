import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDocument, setCurrentDocument] = useState(null);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get('/api/documents/list');
      setDocuments(response.data);
      if (response.data.length > 0) {
        setCurrentDocument(response.data[0]);
      }
    } catch (error) {
      console.error("Error fetching documents", error);
    }
  };

  const showDocument = async (index) => {
    try {
      const response = await axios.get(`/api/documents/show?index=${index}`);
      setCurrentDocument(response.data);
      setCurrentIndex(index);
    } catch (error) {
      console.error("Error showing document", error);
    }
  };

  const nextDocument = async () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < documents.length) {
      showDocument(nextIndex);
    }
  };

  const prevDocument = async () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      showDocument(prevIndex);
    }
  };

  const moveDocument = async (documentNumber) => {
    try {
      const response = await axios.post('/api/documents/move', { documentNumber });
      setCurrentDocument(response.data);
      setCurrentIndex(documentNumber - 1);
    } catch (error) {
      console.error("Error moving document", error);
    }
  };

  return (

    <div className="w-full md:w-4/5 px-4">
    <h1>Document List</h1>
    {currentDocument && (
      <div>
        <h2>{currentDocument.nombre} {currentDocument.apellido}</h2>
        <p>{currentDocument.documento_numero}</p>
        {/* Otros detalles del documento */}
      </div>
    )}
    <button onClick={prevDocument}>Previous</button>
    <button onClick={nextDocument}>Next</button>
    {/* Formulario para mover a un documento específico */}
    <form onSubmit={(e) => {
      e.preventDefault();
      moveDocument(e.target.documentNumber.value);
    }}>
      <input type="number" name="documentNumber" min="1" max={documents.length} />
      <button type="submit">Move</button>
    </form>
    <Firmas nextDocument={nextDocument} prevDocument={prevDocument} />
  </div>

);
};


export default DocumentList;



