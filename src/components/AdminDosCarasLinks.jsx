import React, { useState } from 'react';

const AdminDosCarasLink = () => {
  const [links, setLinks] = useState([{ id: '', dni: '', linkFrente: '', linkDorso: '' }]);

  // Función para añadir una nueva entrada de links
  const addLinkEntry = () => {
    setLinks([...links, { id: '', dni: '', linkFrente: '', linkDorso: '' }]);
  };

  // Manejo de cambios en los inputs
  const handleInputChange = (index, field, value) => {
    const newLinks = links.map((link, i) => (i === index ? { ...link, [field]: value } : link));
    setLinks(newLinks);
  };

  // Función para enviar los datos
  const uploadData = () => {
    const data = links.map((link) => ({
      _id: link.id || undefined,
      link_frente: link.linkFrente,
      link_dorso: link.linkDorso,
    }));

    fetch('/ejecutar/tarea/uploadMultiple', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Agregaste correctamente DNIs!');
        clearForm();
      })
      .catch((error) => console.error('Error:', error));
  };

  // Función para actualizar la información de Portin
  const actualizarInfoPortin = () => {
    fetch('/ejecutar/btn/actualizarInfoPortin', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Actualizaste correctamente Info Portin!');
        window.location.href = '/document/show';
      })
      .catch((error) => console.error('Error:', error));
  };

  // Función para limpiar el formulario
  const clearForm = () => {
    setLinks([{ id: '', dni: '', linkFrente: '', linkDorso: '' }]);
  };

  return (
    <div className="flex flex-col bg-accent hover:border-2 hover:border-primary hover:bg-background text-white p-6 rounded border-2 border-accent mt-4">
    <div id="adminDosCarasLink" className="p-4">
      <h5 className="font-bold mb-4">AGREGAR LINKS DNI</h5>
      <div id="linkEntries">
        {links.map((link, index) => (
          <div key={index} className="flex space-x-2 mt-2">
            <input
              type="text"
              className="p-2 border rounded mb-2"
              placeholder="DNI"
              value={link.dni}
              onChange={(e) => handleInputChange(index, 'dni', e.target.value)}
            />
            <input
              type="text"
              className="p-2 border rounded mb-2"
              placeholder="LINK FRENTE"
              value={link.linkFrente}
              onChange={(e) => handleInputChange(index, 'linkFrente', e.target.value)}
              required
            />
            <input
              type="text"
              className="p-2 border rounded mb-2"
              placeholder="LINK DORSO"
              value={link.linkDorso}
              onChange={(e) => handleInputChange(index, 'linkDorso', e.target.value)}
              required
            />
          </div>
        ))}
      </div>
      <button onClick={addLinkEntry} className="btn btn-warning btn-block mb-4">
        OTRO
      </button>
      <button onClick={uploadData} className="btn btn-success btn-block mb-4">
        AGREGAR LOTE DNI
      </button>
      <button id="btnActualizarInfoPortin" onClick={actualizarInfoPortin} className="btn btn-primary btn-block">
        ACTUALIZAR INFO PORTIN
      </button>
    </div>
    </div>
  );
};

export default AdminDosCarasLink;
