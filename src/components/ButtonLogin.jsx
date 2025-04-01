import React from 'react';
 
// Asegúrate de que esta función esté definida o correctamente importada
function ingresologin() {
    if (window.confirm('¿Usuario?')) {
        console.log('Adelante!');
    }
}
 
const ButtonLogin = ({ ingresologin }) => {
    return (
<div>
<button
                className='gap-4 py-2 px-4 rounded-lg text-white transition-colors hover:text-primary text-center font-bold align-middle'
                >Login 
</button>
</div>
    );
}
 
export default ButtonLogin;