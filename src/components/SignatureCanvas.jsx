import React, { useRef } from 'react';

function SignatureCanvas({ canvasRef, paths, setPaths }) {
    const isDrawing = useRef(false);

    const startDrawing = (e) => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        const newPoint = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
        setPaths(prev => [...prev, [newPoint]]);
        isDrawing.current = true;
    };

    const draw = (e) => {
        if (!isDrawing.current) return;
        const ctx = canvasRef.current.getContext('2d');
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();
        setPaths(prev => {
            const pathsCopy = [...prev];
            pathsCopy[pathsCopy.length - 1].push({
                x: e.nativeEvent.offsetX,
                y: e.nativeEvent.offsetY,
            });
            return pathsCopy;
        });
    };

    const stopDrawing = () => {
        isDrawing.current = false;
    };

    return (
        <div>
            <div className="signature-container bg-white">
                <canvas
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseOut={stopDrawing}
                    width="600"
                    height="300"
                />
            </div>
        </div>
    );
}

export default SignatureCanvas;
