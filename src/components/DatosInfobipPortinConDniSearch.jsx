import React, { useState } from 'react';
import axios from 'axios';

const DatosInfobipPortinConDniSearch = () => {
    const [attribute, setAttribute] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

  async function fetchData (attribute, searchValue) {
    const url = `/api/api/busqueda/InfoPortinConDni/buscarPor/${attribute}/${searchValue}`;
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
    <div>
      <div className="search-form flex flex-row bg-accent hover:border-2 
      hover:border-primary hover:bg-background text-white p-2 rounded border-2 
      justify-left border-accent items-center space-x-8 gap-4 w-[1054px] h-[66px] ml-40">

    <div className="flex flex-row">
      <h5 className="mt-4 font-bold hover:text-primary">GAT vs DNI</h5>
        <label className="ml-8 mt-4">Atributo:</label>
        <select value={attribute} onChange={e => setAttribute(e.target.value)} className="bg-atributo text-white p-2 text-left ml-2 mt-2 rounded cursor-pointer">
          <option value="" >Seleccione un atributo</option>
          <option value="caso_numero">CASO NÚMERO</option>
          <option value="pnm">PNM</option>      
          <option value="documento_numero">DOCUMENTO NÚMERO</option>
          <option value="donanteMercado">DONANTE MERCADO</option>      
          <option value="f_creac">FECHA CREACIÓN</option>
          <option value="numero">NÚMERO LÍNEA</option>
          {/*<option value="firma_check">Firma Check</option>
          <option value="descargador_check">Descargador Check</option>*/}
        </select>
        </div>

        <div>
        <label>Valor de Búsqueda:</label>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="bg-atributo text-white p-2 ml-2 mr-2 rounded mb-2 items-center cursor-pointer"
        />
        <button onClick={handleSearch} className="py-2 px-4 border-2 border-text text-text transition-colors hover:bg-primary hover:text-white hover:border-primary text-center font-bold rounded mt-4 ml-4">Buscar</button>
        <button onClick={handleClose}  className="py-2 px-4 border-2 border-text text-text transition-colors hover:bg-primary hover:text-white hover:border-primary text-center font-bold rounded mt-4 ml-4">Cerrar</button>
      </div>
      </div>
      
      
      <div className="table-fixed w-1/12 mt-2 mb-2">
      <div className="ml-40 flex border-collapse ">
      {results.length > 0 ? (
        <table className='justify-center'>
          <thead className="bg-zinc-700">
            <tr>
              <th scope="col" className="divide-y divide-x border-r border-y border-l divide-white px-2 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/12">Caso Número</th>
              <th scope="col" className="divide-y divide-x border-r border-y border-l divide-white px-2 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/12">PNM</th>
              <th scope="col" className="divide-y divide-x border-r border-y border-l divide-white px-2 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/12">Nombre</th>
              <th scope="col" className="divide-y divide-x border-r border-y border-l divide-white px-2 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/12">Apellido</th>
              <th scope="col" className="divide-y divide-x border-r border-y border-l divide-white px-2 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/12">Tipo Documento</th>
              <th scope="col" className="divide-y divide-x border-r border-y border-l divide-white px-2 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/12">Documento Número</th>
              <th scope="col" className="divide-y divide-x border-r border-y border-l divide-white px-2 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/12">Donante</th>
              <th scope="col" className="divide-y divide-x border-r border-y border-l divide-white px-2 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/12">Fecha Vencimiento</th>
              <th scope="col" className="divide-y divide-x border-r border-y border-l divide-white px-2 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/12">Fecha Creación</th>
              <th scope="col" className="divide-y divide-x border-r border-y border-l divide-white px-2 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/12">Link Frente</th>
              <th scope="col" className="divide-y divide-x border-r border-y border-l divide-white px-2 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/12">Link Dorso</th>
              <th scope="col" className="divide-y divide-x border-r border-y border-l divide-white px-2 py-3 text-center text-xs font-medium uppercase tracking-wider w-1/12">Número</th>
              {/*<th>Firma Check</th>
              <th>Descargador Check</th>*/}
            </tr>
          </thead>
          <tbody className="divide-y divide-x divide-white bg-black ">
            {displayedResults.map((result, index) => (
              <tr key={index}>
                <td className="px-2 py-2 whitespace-nowrap text-xs border-l border-r border-b border-white">{result.caso_numero}</td>
                <td className="px-2 py-2 whitespace-nowrap text-xs border-l border-r border-b border-white">{result.pnm}</td>
                <td className="px-2 py-2 whitespace-nowrap text-xs border-l border-r border-b border-white">{result.nombre}</td>
                <td className="px-2 py-2 whitespace-nowrap text-xs border-l border-r border-b border-white">{result.apellido}</td>
                <td className="px-2 py-2 whitespace-nowrap text-xs border-l border-r border-b border-white">{result.tipo_documento}</td>
                <td className="px-2 py-2 whitespace-nowrap text-xs border-l border-r border-b border-white">{result.documento_numero}</td>
                <td className="px-2 py-2 whitespace-nowrap text-xs border-l border-r border-b border-white">{result.donante}</td>
                <td className="px-2 py-2 whitespace-nowrap text-xs border-l border-r border-b border-white">{result.f_venc}</td>
                <td className="px-2 py-2 whitespace-nowrap text-xs border-l border-r border-b border-white">{result.f_creac}</td>
                <td className="px-2 py-2 whitespace-nowrap text-xs border-l border-r border-b border-white"><a href={result.link_frente} target="_blank">URL</a></td>
                <td className="px-2 py-2 whitespace-nowrap text-xs border-l border-r border-b border-white"><a href={result.link_dorso} target="_blank">URL</a></td>
                <td className="px-2 py-2 whitespace-nowrap text-xs border-l border-r border-b border-white">{result.numero}</td>
                {/*<td className="px-2 py-2 whitespace-nowrap text-xs border-l border-r border-b border-white">{result.firma_check}</td>
                <td className="px-2 py-2 whitespace-nowrap text-xs border-l border-r border-b border-white">{result.descargador_check}</td>*/}
              </tr>
            ))}
           </tbody>
        </table>
      ) : null}
      </div>
    </div>


    <div className="block flex-row justify-center mt-auto">
      <div className="inline-flex justify-betweenmt-2 ml-40 mb-8">
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


export default DatosInfobipPortinConDniSearch;
