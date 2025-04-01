// src/ConsoleViewer.jsx
import React, { useEffect } from 'react';

const ConsoleViewer = () => {
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080/logs');
    const logContainer = document.getElementById('logContainer');

    ws.onmessage = function (event) {
      const newLogMessage = document.createElement('div');
      newLogMessage.classList.add('log-message');
      newLogMessage.innerHTML = event.data;
      logContainer.appendChild(newLogMessage);
      logContainer.scrollTop = logContainer.scrollHeight; // Auto-scroll to bottom
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="bg-background w-[1054px] h-[1200px] ml-40 overflow-hidden mt-8">
      <h1 className="text-2xl mb-4 font-bold">Visor de Consola</h1>
      <div id="logContainer" className="border-2 border-primary rounded  p-2 h-96 overflow-y-scroll bg-accent scrollbar-custom"></div>
    </div>
  );
};

export default ConsoleViewer;
