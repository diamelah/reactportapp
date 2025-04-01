import React from "react";
import 'tailwindcss/tailwind.css';

import { Outlet, Link } from "react-router-dom";


const Header  = () => {
    const empresa = "Telecom"
return (
    <header className="text-white-600 body-font">
    <div className="container mx-24 flex flex-wrap p-10 pb-4 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <button>
        <img src="img/logo_personal.png" alt="" />
        </button>
        <span className="ml-3 text-xl text-primary font-bold">personal</span>
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <Link to="/" className="mr-5  hover:text-primary cursor-pointer font-bold">Home</Link>
        <Link to="adminapp" className="mr-5 hover:text-primary cursor-pointer font-bold">AdminApp</Link>
        <Link to="busqueda" className="mr-5 hover:text-primary cursor-pointer font-bold">Búsqueda</Link>
        <Link to="consola" className="mr-5 hover:text-primary cursor-pointer font-bold">Consola</Link>
        <Link to="firmas" className="mr-5 hover:text-primary cursor-pointer font-bold">Firmas</Link>
       
           
      </nav>

  

<Outlet />
    </div>
  </header>
);
};

export default Header;