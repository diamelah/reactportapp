import React, { useState, useEffect } from 'react';

function PortinClaro() {
    const [portinClaro, setPortinClaro] = useState(0); // Inicializa el estado con un valor por defecto

    useEffect(() => {
        fetch('/api/pdf/traerQPortinLocalClaro') // Asegúrate de que la URL sea correcta
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();  // Asume que la respuesta es texto plano y lo convierte
            })
            .then(data => {
                setPortinClaro(parseInt(data, 10)); // Convierte el texto a un número y actualiza el estado
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setPortinClaro(0); // Manejo de errores: establece portinClaro a 0 si hay un error
            });
    }, []); // El array vacío asegura que este efecto se ejecute solo una vez después del montaje inicial

    return (
        <div>
            <h5 >Portin CLARO: <span id="portinClaro" className='text-yellow-500 font-bold text-lg'>{portinClaro}</span></h5>
            
        </div>
    );
}

export default PortinClaro;
