import React, { useState, useEffect } from 'react';
import ButtonGeneric from './ButtonGeneric';
import Qgat from './Qgat';
import UltFechaHistorialGAT from './UltFechaHistorialGAT';
import ModalHome from './ModalHome';
import PortinClaro from './PortinClaro';
import PortinMovi from './PortinMovi';
import DniClaro from './DniClaro';
import DniMovi from './DniMovi';

{/*Botón "modal" tutorial sobre cada Card.*/} 

const Cards = () => {
  
  const mensajePostFirmas = "";
  
 

  const confirmarYActualizarGAT = () => {
    if (window.confirm('¿Estás seguro de que quieres actualizar el GAT?')) {
      actualizarGAT();
    } else {
      console.log('Actualización de GAT cancelada');
    }
  };

 
  const actualizarGAT = () => {
    document.body.classList.add('loading-cursor');

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/ejecutar/btn/actualizarGat", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        document.body.classList.remove('loading-cursor');

        if (xhr.status === 200) {
          alert('GAT actualizado con éxito');
          document.getElementById("mensajeGat").innerText = 'Gat actualizado, ahora podés realizar preparativos';
        } else {
          console.error('Error al actualizar GAT');
        }
      }
    };

    document.getElementById("mensajeGat").innerText = 'GAT ACTUALIZANDOSE';
    document.getElementById("mensajeGat").className = "tracking-widest text-xs title-font font-medium text-yellow-500 mb-2";
    xhr.send();
  };

 

  const confirmarYActualizarDosSemanas = () => {
    if (window.confirm('¿Estás seguro de que quieres actualizar dos semanas de Pre PNM?')) {
      actualizarDosSemanas();
    } else {
      console.log('Actualización de dos de Pre PNM semanas cancelada');
    }
  };

  const actualizarDosSemanas = () => {
    document.body.classList.add('loading-cursor');

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/ejecutar/btn/DatosDosSemanas", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        document.body.classList.remove('loading-cursor');
        alert.className = 'tracking-widest text-xs title-font font-medium text-yellow-500 mt-3';
        alert('PRE PNM ACTUALIZADO');

        if (xhr.status === 200) {
          window.location.href = "http://localhost:5173/firmas";
        } else {
          alert("Error al importar ListaDniActual");
        }
      }
    };

    document.getElementById("mensajePrePnm").innerText = 'PRE PNM ACTUALIZANDOSE';
    document.getElementById("mensajePrePnm").className = "tracking-widest text-xs title-font font-medium text-yellow-500 mb-2";
    document.getElementById("mensajeGat").className = "tracking-widest text-xs title-font font-medium text-yellow-500 mb-2";

    xhr.send();
  };

  

    const confirmarYgenerarPdfsClaro = () => {
      if (window.confirm('¿Estás seguro de que querés Generar PNMS Claro?')) {
        generarPdfsClaro();
      } else {
        console.log('Generación de PDF Claro cancelada por el usuario');
      }
    };
  
    
   
    const generarPdfsClaro = () => {

     document.body.classList.add('loading-cursor');
  
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://127.0.0.1:8080/ejecutar/btn/generarPdfsClaro", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          document.body.classList.remove('loading-cursor');
  
          if (xhr.status === 200) {
            alert('PNMs GENERADOS CLARO');
            document.getElementById("mensajePNMClaro").innerText = 'Generando PDFs Claro';
          } else {
            alert('Error al generar PNMs Claro');
          }
        }
      };

      document.getElementById("mensajePNMClaro").innerText = 'PDFs genernandose';
    document.getElementById("mensajePNMClaro").className = "tracking-widest text-xs title-font font-medium text-yellow-500 mb-2";
  
      xhr.send();
    };

   

  
    const confirmarYgenerarPdfsMovi = () => {
      // Preguntar al usuario mediante un cuadro de diálogo de confirmación
      var confirmacion = window.confirm('¿Estás seguro de que querés Generar PNMS Movi ?');
    
      // Si el usuario confirma, entonces proceder con la actualización
      if (confirmacion) {
        generarPdfsMovi();
      } else {
        // Si el usuario cancela, puedes mostrar un mensaje o realizar otras acciones
        console.log('Generación PDF Movi cancelada por el usuario');
      }
    };
  
    const generarPdfsMovi = () => {
      // Asigna el CSS que cambia icono del mouse
      document.body.classList.add('loading-cursor');
  
      // Realizar una llamada AJAX al backend
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://127.0.0.1:8080/ejecutar/btn/generarPdfsMovi", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          document.body.classList.remove('loading-cursor');
  
          if (xhr.status === 200) {
            // La llamada AJAX se completó con éxito
            alert('PNMs GENERADOS MOVI');
          } else {
            alert('Error al generar PNMs Movi');
          }
        }
      };
      xhr.send();
    };

    const confirmarYsubirPdfsClaro = () => {
      // Preguntar al usuario mediante un cuadro de diálogo de confirmación
      var confirmacion = window.confirm('¿Estás seguro de que querés Subir los PNMs de Claro ?');
    
      // Si el usuario confirma, entonces proceder con la actualización
      if (confirmacion) {
        zipPdfsClaro();
        subirPdfsClaro();
      } else {
        // Si el usuario cancela, puedes mostrar un mensaje o realizar otras acciones
        console.log('Subida Claro cancelada por el usuario');
      }
    };
  
    const subirPdfsClaro = () => {
      // Realizar una llamada AJAX al backend
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://127.0.0.1:8080/pdf/moverPNMsClaro", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            // La llamada AJAX se completó con éxito
            alert('SUBIDA CLARO');
          } else {
            alert('Error al subir PNMs Claro');
          }
        }
      };
      xhr.send();
    };
  
    const zipPdfsClaro = () => {
      // Realizar una llamada AJAX al backend
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://127.0.0.1:8080/pdf/zipPnmsClaro", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            // La llamada AJAX se completó con éxito
            alert('ZIP CLARO');
          } else {
            alert('Error al comprimir PNMs Claro');
          }
        }
      };
      xhr.send();
    };
    const confirmarYsubirPdfsMovi = () => {
      // Preguntar al usuario mediante un cuadro de diálogo de confirmación
      var confirmacion = window.confirm('¿Estás seguro de que querés Subir los PNMs de Movi ?');
    
      // Si el usuario confirma, entonces proceder con la actualización
      if (confirmacion) {
        zipPdfsMovi();
        subirPdfsMovi();
      } else {
        // Si el usuario cancela, puedes mostrar un mensaje o realizar otras acciones
        console.log('Subida Movi cancelada por el usuario');
      }
    };
  
    const subirPdfsMovi = () => {
      // Realizar una llamada AJAX al backend
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://127.0.0.1:8080/pdf/moverPNMsMovi", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            // La llamada AJAX se completó con éxito
            alert('SUBIDA MOVI');
          } else {
            alert('Error al subir PNMs Movi');
          }
        }
      };
      xhr.send();
    };
  
    const zipPdfsMovi = () => {
      // Realizar una llamada AJAX al backend
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://127.0.0.1:8080/pdf/zipPnmsMovi", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            // La llamada AJAX se completó con éxito
            alert('ZIP MOVI');
          } else {
            alert('Error al comprimir PNMs Movi');
          }
        }
      };
      xhr.send();
    };


   
     

  return (
    <section className="text-white-600 body-font ml-44 mr-44">
      <div className="container mx-auto px-4 py-6 items-center">
        <div className="grid grid-cols-2 gap-4 items-center">
        <div className="col-span-1 flex flex-col gap-4 p-4">

            <div className="h-60 px-6 pt-6 pb-24 rounded-custom1 overflow-hidden text-center relative bg-accent hover:border-2 hover:border-primary hover:bg-background transition-colors border-2 border-accent">
            <div className='flex flex-col ml-2 '>
              <ModalHome />
              </div>
              <h2 className="tracking-widest text-xs title-font font-medium text-white mb-4 ">PASO 1
              </h2>
              <h5 className="title-font sm:text-2xl text-xl text-white mb-3 font-bold">
                Q GAT < Qgat />
              </h5>
              <div id="mensajeGat"></div>
              <ButtonGeneric onClick={confirmarYActualizarGAT} className="mt-2 mb-0">
                ACTUALIZAR
              </ButtonGeneric>
              
              <h2 className="tracking-widest text-xs title-font font-medium text-white mt-4 mb-2">
                última actualización <UltFechaHistorialGAT />
              </h2>
            </div>
          </div>


          <div className="p-2">
            <div className="h-60 px-6 pt-6 pb-24 rounded-custom1 overflow-hidden text-center relative bg-accent hover:border-2 hover:border-primary hover:bg-background transition-colors border-2 border-accent">
            <div className='flex flex-col ml-2 '>
              <ModalHome />
              </div>
              <h2 className="tracking-widest text-xs title-font font-medium text-white mb-4">PASO 2</h2>
              <h5 className="title-font sm:text-2xl text-xl text-white mb-3 font-bold">
                PREPARATIVOS PRE PNM
              </h5>
              
              <ButtonGeneric onClick={confirmarYActualizarDosSemanas} className="mt-2 mb-4">
                ACTUALIZAR
              </ButtonGeneric>
              <div id="mensajePrePnm">
              <span id="mensajePostFirmas" className="tracking-widest text-xs title-font font-medium text-white mt-4">{mensajePostFirmas}</span>
              </div>
            </div>
          </div>
         

          <div className="col-span-1 rounded-lg p-2">
            <div className="h-94 px-6 pt-6  pb-19 rounded-custom1 overflow-hidden text-center relative bg-accent hover:border-2 hover:border-primary hover:bg-background transition-colors border-2 border-accent">
            <div className='flex flex-col ml-2 '>
              <ModalHome />
              </div>
              <h2 className="tracking-widest text-xs title-font font-medium text-white mb-4">CLARO</h2>
              <h5 className="title-font sm:text-2xl text-xl text-white mb-3 font-bold mt-4">
                GENERACION PNM
              </h5>
              <div className="botones-form  mt-6 mb-8 ">
                <ButtonGeneric onClick={confirmarYgenerarPdfsClaro}>
                  GENERAR PNMs
                </ButtonGeneric>
     
          

                <ButtonGeneric onClick={confirmarYsubirPdfsClaro} className={"ml-2"}>
                  SUBIR CLARO
                </ButtonGeneric>
              </div>

              <div id="mensajePNMClaro"></div>

              <div className="flex items-center space-x-4 justify-center pb-4 ml-2">
                <h5 className='tracking-widest text-sm title-font  text-white'><PortinClaro /></h5>
                <h5 className='tracking-widest text-sm title-font  text-white'><DniClaro /></h5>
              </div>
              <div className="flex items-center justify-center space-x-4">
               
             
              </div>
            </div>
          </div>

          <div className="col-span-1 rounded-lg p-2">
            <div className="h-94 px-6 pt-6  pb-19 rounded-custom1 overflow-hidden text-center relative bg-accent hover:border-2 hover:border-primary hover:bg-background transition-colors border-2 border-accent">
            <div className='flex flex-col ml-2 '>
              <ModalHome />
              </div>
              <h2 className="tracking-widest text-xs title-font font-medium text-white mb-4">MOVISTAR</h2>
              <h5 className="title-font sm:text-2xl text-xl text-white mb-3 font-bold mt-4">
                GENERACION PNM
              </h5>
              <div className="botones-form mt-6 mb-8">
                <ButtonGeneric onClick={confirmarYgenerarPdfsMovi}>
                  GENERAR PNMs
                </ButtonGeneric>
                <ButtonGeneric onClick={confirmarYsubirPdfsMovi} className={"ml-2"} >
                  SUBIR MOVI
                </ButtonGeneric>
              </div>
            <div className="flex  items-center space-x-4 justify-center pb-4 ml-4">
            <h5 className='tracking-widest text-sm title-font  text-white'><PortinMovi /></h5>
              <h5 className='tracking-widest text-sm title-font  text-white'><DniMovi /></h5>
              </div>
              <div className="flex  items-center space-x-4 justify-center">
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cards;
