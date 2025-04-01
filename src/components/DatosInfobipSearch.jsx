import React, { useState } from 'react';
import axios from 'axios';

const DatosInfobipSearch = () => {
  const [attribute, setAttribute] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  async function fetchData(attribute, searchValue) {
    const url = `/api/api/busqueda/DatosInfobip/buscarPor/${attribute}/${searchValue}`;
    console.log("URL being requested:", url);
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error en la búsqueda:', error);
      throw error;
    }
  }


  const handleSearch = async () => {
    const data = await fetchData(attribute, searchValue);
    setResults(data);
  };

  const handleClose = () => {
    setResults([]);  // Limpia los resultados de la búsqueda
    // Opcionalmente, puedes también resetear los valores de búsqueda
    setSearchValue('');
    setAttribute('');
  };

  const displayedResults = results.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );




  return (
    <div >
      <div className="search-form flex flex-row bg-accent hover:border-2 hover:border-primary 
      hover:bg-background text-white p-2 rounded border-2 justify-left border-accent items-center 
      space-x-8 gap-4 w-[1054px] h-[66px] ml-40">

        <div className="flex flex-row">
          <h5 className="mt-4 font-bold hover:text-primary">INFOBIP</h5>
          <label className="ml-8 mt-4">Atributo:</label>
          <select value={attribute} onChange={(e) => setAttribute(e.target.value)} className="bg-atributo text-white p-2 text-left ml-2 mt-2 rounded cursor-pointer">
            <option value="">Seleccione un atributo</option>
            <option value="fechaInfobip">FECHA INGRESO</option>
            <option value="dni">DOCUMENTO NÚMERO</option>
            <option value="nlinea">NUMERO LINEA CON 549</option>
          </select>
        </div>

        <div>
          <label>Valor de Búsqueda:</label>
          <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="bg-atributo text-white p-2 ml-2 mr-2 rounded mb-2 items-center cursor-pointer" />

          <button onClick={handleSearch} className="py-2 px-4 border-2 border-text text-text transition-colors hover:bg-primary hover:text-white hover:border-primary text-center font-bold rounded mt-4 ml-4">Buscar</button>
          <button onClick={handleClose} className="py-2 px-4 border-2 border-text text-text transition-colors hover:bg-primary hover:text-white hover:border-primary text-center font-bold rounded mt-4 ml-4">Cerrar</button>
        </div>



      </div>

      <div className="table-fixed w-[1094px] mt-2 mb-2">
        <div className="ml-40 flex border-collapse ">
          {results.length > 0 ? (
            <table className=" divide-y divide-x divide-white  border-b border-white sm:rounded-lg ">
              <thead className="bg-zinc-700">
                <tr>
                  <th scope="col" className="divide-y divide-x border-r border-y border-l divide-white px-2 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/12">Fecha Infobip</th>
                  <th scope="col" className="px-2 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/12 border-r border-y border-l">Numero Dni</th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/12 border-r border-y border-l">Cara Dni</th>
                  <th scope="col" className="px-2 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/12 border-r border-y border-l">Numero Linea</th>
                  <th scope="col" className="px-2 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/4 border-r border-y border-l">URL a imagen</th>
                  <th scope="col" className="px-2 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/12 border-r border-y border-l">Fecha que lo trajimos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-x divide-white bg-black">
                {displayedResults.map((result, index) => (
                  <tr key={index}>
                    <td className="px-2 py-2 whitespace-nowrap text-xs border-r border-b border-white">{result.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs border-r border-b">{result.numero_dni}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs border-r border-b">{result.cara_dni}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs border-r border-b">{result.numero_linea}</td>
                    <td className="px-2 text-left text-xs border-r border-b">{result.url}</td>
                    <td className="px-2 py-4 whitespace-nowrap text-xs border-r border-b">{result.fecha_DatosInfobip_H}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>



      </div>

      <div className="block flex-row justify-center mt-auto">
        <div className="inline-flex justify-between mt-2 ml-40 mb-4">
          {Array.from({ length: Math.ceil(results.length / pageSize) }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-2 mr-2 text-xs border rounded ${currentPage === i + 1 ? 'bg-primary text-white' : 'bg-black text-gray-700'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DatosInfobipSearch;
