// components/SignaturePad.jsx
import React from 'react';
import CanvasDraw from "react-canvas-draw";

const SignaturePad = () => {
  return (
    <div className=" bg-background">
      <CanvasDraw brushColor="black" canvasWidth={550} canvasHeight={320} brushRadius={1}/>
    </div>
  );
};

export default SignaturePad;
