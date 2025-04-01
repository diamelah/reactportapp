import React from 'react';

function ButtonGeneric({ children, onClick, className }) {
  return (
    <button className={`gap-4 py-2 px-4 rounded-lg border-2 border-text text-text transition-colors  hover:bg-primary hover:text-white hover:border-primary text-center font-bold ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonGeneric;