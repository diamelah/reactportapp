import React, { useState, useRef } from 'react';
import ModalAdmin from '../components/ModalAdmin';

const AdminApp = () => {
  // Estado y referencias para la carga de archivos
  const [file, setFile] = useState(null);
  const fileInputRef = useRef();

  // Estado para la gestión de links DNI
  const [links, setLinks] = useState([{ id: '', dni: '', linkFrente: '', linkDorso: '' }]);

  // Manejo de cambio de archivo
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type !== 'text/plain') {
      alert('Por favor, selecciona un archivo de texto (.txt).');
      setFile(null);
      fileInputRef.current.value = "";  // Reset the file input
    } else {
      setFile(file);
    }
  };

  // Envío de archivo
  const handleSubmit = (event) => {
    event.preventDefault();
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
    .then(response => response.json())
    .then(data => alert('Archivo procesado con éxito'))
    .catch(error => alert('Error al procesar el archivo'));
  };

  // Añadir nueva entrada de link DNI
  const addLinkEntry = () => {
    setLinks([...links, { id: '', dni: '', linkFrente: '', linkDorso: '' }]);
  };

   // Manejar cambio en los inputs de los links DNI
   const handleInputChange = (index, field, value) => {
    const newLinks = links.map((link, i) => {
      if (i === index) {
        return { ...link, [field]: value };
      }
      return link;
    });
    setLinks(newLinks);
  };

  // Envío de datos de links DNI
const uploadData = () => {
  fetch('/api/ejecutar/tarea/uploadMultiple', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(links),
  })
    .then(response => response.json())
    .then(() => {
      alert('¡Agregaste correctamente DNIs!');
      setLinks([{ id: '', dni: '', linkFrente: '', linkDorso: '' }]); // Clear form
    })
    .catch(error => console.error('Error:', error));
};

  


  const actualizarInfoPortin = () => {
    fetch('/ejecutar/btn/actualizarInfoPortin', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      alert('Actualizaste correctamente Info Portin!');
    })
    .catch(error => console.error('Error:', error));
  };

  // Datos simulados para PDFs por día
  const [reports, setReports] = useState([
    { fecha: "2024-07-23", cantidad: 4 },
    { fecha: "2024-06-23", cantidad: 503 },
    { fecha: "2024-06-16", cantidad: 1006 },
    { fecha: "2024-06-15", cantidad: 1006 }
  ]);


 
  
  return (
    <div className="bg-background w-[1054px] h-[1200px] ml-40 overflow-hidden mt-8">
      <div className="flex justify-between">
        {/* Bloque de Reseteo de Gestiones */}
        <div className="flex flex-col bg-accent hover:border-2 hover:border-primary hover:bg-background transition-colors text-white p-6 rounded border-2 border-accent w-[440px] h-[300px]">
          <ModalAdmin />
          <h5 className="font-bold mb-6">RESETEO DE GESTIONES</h5>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".txt" className="p-1 rounded mb-2" />
            <button type="submit" className="py-2 px-4 border-2 border-text text-text transition-colors hover:bg-primary hover:text-white hover:border-primary text-center mt-4 font-bold rounded">
              Subir Archivo
            </button>
          </form>
        </div>


       


        <div className="flex flex-col bg-accent hover:border-2 hover:border-primary hover:bg-background text-white p-4 rounded border-2 border-accent w-[550px] h-[300px] mb-8">
            <h5 className="text-left font-bold  mb-4">PDFs X DÍA</h5>
            <div className="flex justify-start">
                <table className="w-full text-left rounded border-2 ">
                    <thead>
                        <tr className="bg-gray-200 text-black">
                            <th className="border p-4">FECHA</th>
                            <th className="border p-4">CANTIDAD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report, index) => (
                            <tr key={index} className="border">
                                <td className="border p-2">{report.fecha}</td>
                                <td className="border p-2">{report.cantidad}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>{/* Bloque de PDFs por Día */}
        

         



      </div>

     {/* Bloque de Agregar Links DNI */}         
     <div className="flex flex-col bg-accent hover:border-2 hover:border-primary hover:bg-background text-white p-6 rounded border-2 border-accent mt-4">
          <ModalAdmin />
          <span className="font-bold">AGREGAR LINKS DNI</span>
          {links.map((link, index) => (
            <div key={index} className="flex space-x-2 mt-2">
              <input type="text" placeholder="DNI" className="h-14 text-black px-2 mt-4 rounded" value={link.dni}
                onChange={(e) => handleInputChange(index, 'dni', e.target.value)} />
              <input type="text" placeholder="LINK FRENTE" className="h-14 px-2  text-black mt-4 rounded" value={link.linkFrente}
                onChange={(e) => handleInputChange(index, 'linkFrente', e.target.value)} />
              <input type="text" placeholder="LINK DORSO" className="h-14 px-2 text-black mt-4 rounded" value={link.linkDorso}
                onChange={(e) => handleInputChange(index, 'linkDorso', e.target.value)} />
                <button onClick={addLinkEntry} className="py-2 px-4 border-2 border-text text-text transition-colors hover:bg-primary hover:text-black hover:border-primary text-center font-bold rounded mt-2">
            OTRO
          </button>
          <button onClick={uploadData} className="py-2 px-2 border-2 border-text text-text transition-colors hover:bg-primary hover:text-black hover:border-primary text-center font-bold rounded mt-2">
            AGREGAR LOTE DNI
          </button>
          <button onClick={actualizarInfoPortin} className="py-2 px-2 border-2 border-text text-text transition-colors hover:bg-primary hover:text-black hover:border-primary text-center font-bold rounded mt-2">
            ACTUALIZAR INFO PORTIN
          </button>
            </div>            
          ))}
         
        
        </div>


    </div>
  );
};


export default AdminApp;
