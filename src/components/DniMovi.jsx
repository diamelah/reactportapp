import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DniMovi = () => {
    const [dniMovi, setCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/pdf/traerQDniLocalMovi');
                setCount(response.data);
            } catch (error) {
                console.error('Error al obtener datos:', error);
                setCount(0);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h5>Dni MOVI: <span id="dniClaro" className='text-yellow-500 font-bold text-lg'>{dniMovi}</span></h5>
        </div>
    );
};

export default DniMovi;
