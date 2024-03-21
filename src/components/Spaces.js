import React from 'react';
import Cards from './Cards'; // Asegúrate de importar el componente CardComponent desde su ubicación correcta
import './space.css'; 
const Space = () => {
  // Puedes ajustar esto según cuántas tarjetas quieras tener
  const numberOfCards = 6;

  return (
    <div className="space-container">
      <h1 className="space-title">Espacio de Tarjetas</h1>
      <div className="space-row">
        {[...Array(numberOfCards)].map((_, index) => (
          <div key={index} className="space-col">
            <Cards />
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Space;
