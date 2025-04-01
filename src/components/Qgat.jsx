import React, { useState, useEffect } from 'react';

function QGAT() {
  const [cantidad, setCantidad] = useState(0);

  const fetchCantidad = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080/ejecutar/tarea/RE/verQGAT');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text();
      setCantidad(parseInt(data, 10));
    } catch (error) {
      console.error('Error fetching data:', error);
      setCantidad(0);
    }
  };

  useEffect(() => {
    fetchCantidad();
  }, []);

  return <span id="cantidadSpan" className='text-yellow-500'>{cantidad}</span>;
}

export default QGAT;
