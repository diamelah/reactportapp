import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ButtonFirmas from '../components/ButtonFirmas';
import SignatureCanvas from '../components/SignatureCanvas';

const Firmas = () => {
  const [paths, setPaths] = useState([]);
  const canvasRef = useRef(null);
  const [documents, setDocuments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDocument, setCurrentDocument] = useState(null);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get('api/api/documents/list');
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
      const response = await axios.get(`api/api/documents/show?index=${index}`);
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

  // const moveDocument = async (documentNumber) => {
  //   try {
  //     const response = await axios.post('api/ejecutar/tarea/RE/VerUltimaFecha/historialGAT', { documentNumber });
  //     setCurrentDocument(response.data);
  //     setCurrentIndex(documentNumber - 1);
  //   } catch (error) {
  //     console.error("Error moving document", error);
  //   }
  // };

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setPaths([]);
  };

  const undoLast = () => {
    const pathsCopy = paths.slice(0, -1);
    setPaths(pathsCopy);
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.beginPath();
    pathsCopy.forEach(path => {
      ctx.moveTo(path[0].x, path[0].y);
      path.forEach(point => {
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
      });
    });
  };


  const saveSignature = async () => {
    // Obtener los datos de la imagen del lienzo como una URL de imagen en formato base64
    const imageData = canvasRef.current.toDataURL('image/png');

    // Crear el objeto FirmasRequest con el número de documento y los datos de la imagen
    const firmasRequest = {
      documentNumero: 1,
      imageData: imageData,
    };

    try {
      // Enviar los datos al backend utilizando axios y el endpoint /document/saveSignature
      const response = await axios.post('api/document/saveSignature', firmasRequest);
      console.log(response.data); // Manejar la respuesta del backend, si es necesario
    } catch (error) {
      console.error("Error al guardar la firma", error);
      // Manejar errores de solicitud, si es necesario
    }
    finally {
      clearCanvas();
      nextDocument();

    }
  };


  return (
    <div className="container mx-auto">
      <div className="text-center mb-4 p-2">
      </div>

      <div className="flex flex-wrap -mx-8 flex-1">
        <div className="w-full md:w-1/5 px-4 mb-4 md:mb-0">
          <div className="h-full bg-divs px-1 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
            <div className="space-y-4">
              {currentDocument && (
                <>
                  <div className="bg-background p-4 rounded-lg shadow-lg border-2 border-text text-text transition-colors hover:bg-primary hover:text-white hover:border-primary text-center">
                    <span className="block text-white">Nombre: {currentDocument.nombre}</span>
                  </div>
                  <div className="bg-background p-4 rounded-lg shadow-lg border-2 border-text text-text transition-colors hover:bg-primary hover:text-white hover:border-primary text-center">
                    <span className="block text-white">Apellido: {currentDocument.apellido}</span>
                  </div>
                  <div className="bg-background p-4 rounded-lg shadow-lg border-2 border-text text-text transition-colors hover:bg-primary hover:text-white hover:border-primary text-center">
                    <span className="block text-white">Documento Número: {currentDocument.documento_numero}</span>
                  </div>
                  <div className="bg-background p-4 rounded-lg shadow-lg border-2 border-text text-text transition-colors hover:bg-primary hover:text-white hover:border-primary text-center">
                    <span className="block text-white">Total de Documentos: {documents.length}</span>
                  </div>
                  <div className="bg-background p-4 rounded-lg shadow-lg border-2 border-text text-text transition-colors hover:bg-primary hover:text-white hover:border-primary text-center">
                    <span className="block text-white">Posición Actual: {currentIndex + 1}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap w-full md:w-4/5 px-1">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 px-1">
            <div className="h-full bg-divs px-2 pt-9 pb-5 rounded-lg overflow-hidden">
              <ButtonFirmas prevDocument={prevDocument} nextDocument={nextDocument} />
              <div className="flex flex-col items-center space-y-4">

                <div className="flex justify-center">
                  <div className="auto rounded overflow-hidden shadow-lg my-2 -background">
                    <div className="max-h-96 overflow-y-auto">
                      {currentDocument && (
                        <img id="frontimage" src={currentDocument.link_frente} alt="Document Front" className="w-full" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="w-full md:w-1/2 px-4">
            <div className="h-full bg-divs px-8 pt-9 pb-5 rounded-lg overflow-hidden">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex justify-center space-x-4">
                  <button
                    type="button"
                    className="px-4 py-2 text-xs font-medium rounded-lg shadow-lg border-2 border-text text-text transition-colors hover:bg-primary hover:text-white hover:border-primary text-center mr-2 mb-2"
                    onClick={clearCanvas}>
                    Borrar Firma
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 text-xs font-medium rounded-lg shadow-lg border-2 border-text text-text transition-colors hover:bg-primary hover:text-white hover:border-primary text-center mr-2 mb-2"
                    onClick={undoLast}>
                    Deshacer trazo
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 text-xs font-medium rounded-lg shadow-lg border-2 border-text text-text transition-colors hover:bg-primary hover:text-white hover:border-primary text-center mr-2 mb-2"
                    onClick={saveSignature}>

                    Guardar Firma
                  </button>
                </div>
                <div className="flex justify-center">
                  <SignatureCanvas canvasRef={canvasRef} paths={paths} setPaths={setPaths} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firmas;
