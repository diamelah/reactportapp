import React from 'react';

function ResultadoBusqueda({ data }) {
  return (
    <div className="bg-black p-4 rounded-lg shadow">
      <table className="w-full text-white">
        <thead>
          <tr>
            <th className="p-2">Columna 1</th>
            <th className="p-2">Columna 2</th>
            <th className="p-2">Columna 3</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="p-2">{item.col1}</td>
              <td className="p-2">{item.col2}</td>
              <td className="p-2">{item.col3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultadoBusqueda;
