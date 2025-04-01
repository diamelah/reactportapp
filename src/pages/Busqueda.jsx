import React, { useState } from 'react';

import DatosInfobipSearch from '../components/DatosInfobipSearch';
import DatosGatSearch from '../components/DatosGatSearch';
import DatosInfobipPortinConDniSearch from '../components/DatosInfobipPortinConDniSearch';
import PdfsGeneradosSearch from '../components/PdfsGeneradosSearch';


function Busqueda() {
  return (
    <div className='mt-10'>

      <div>
        <div>
          <div className='flex flex-col '>
            <DatosInfobipSearch />
          </ div>
        </div>

        <div>
          <div className='flex flex-col '>
            <DatosGatSearch />
          </ div>
        </div>

        <div>
          <div className='flex flex-col '>
            <DatosInfobipPortinConDniSearch />
          </ div>
        </div>

        <div>
          <div className='flex flex-col '>
            <PdfsGeneradosSearch />
          </ div>
        </div>

      </div>
    </div>

  );
}


// DNI para prueba 5662974

export default Busqueda;
