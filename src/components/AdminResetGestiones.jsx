import React, { useState } from 'react';
import ModalAdmin from '../components/ModalAdmin';

const SubidorDeTxt = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar el envío tradicional del formulario

    if (!file) {
      alert('Por favor, selecciona un archivo.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => alert('Archivo procesado con éxito'))
      .catch((error) => alert('Error al procesar el archivo'));
  };

  return (
    <div className="bg-background w-[1054px] h-[1200px] ml-40 overflow-hidden mt-8">
      <div className="flex justify-between">
        {/* Bloque de Reseteo de Gestiones */}
        <div className="flex flex-col bg-accent hover:border-2 hover:border-primary hover:bg-background transition-colors text-white p-6 rounded border-2 border-accent w-[440px] h-[300px]">
          <ModalAdmin />
    <div id="subidorDeTxt" className="p-4">
      <h5 className="font-bold mb-6">RESETEO DE GESTIONES</h5>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="file"
          id="fileInput"
          accept=".txt"
          onChange={handleFileChange}
          className="p-1 rounded mb-2"
        />
        <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded">
          Subir Archivo
        </button>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};



export default SubidorDeTxt;
