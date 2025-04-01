import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DniClaro = () => {
    const [dniClaro, setCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/pdf/traerQDniLocalClaro');
                setCount(response.data);
            } catch (error) {
                console.error('Error al obtener datos:', error);
                setCount(0);
            }
        };

        fetchData();
    }, []);
// El array vacío asegura que el efecto se ejecute solo una vez

    return (
        <div>
            <h5>Dni CLARO: <span id="dniClaro" className='text-yellow-500 font-bold text-lg'>{dniClaro}</span></h5>
        </div>
    );
};

export default DniClaro;
