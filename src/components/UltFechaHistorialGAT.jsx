import React, { useState, useEffect } from 'react';

function UltFechaHistorialGAT() {
  const [ultFechaHistorialGAT, setUltFechaHistorialGAT] = useState('');

  const fetchUltFechaHistorialGAT = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080/ejecutar/tarea/RE/VerUltimaFecha/historialGAT');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text();
      setUltFechaHistorialGAT(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchUltFechaHistorialGAT();
  }, []);

  return <span id="ultFechaHistorialGAT" className='text-yellow-500'>{ultFechaHistorialGAT}</span>;
}

export default UltFechaHistorialGAT;
