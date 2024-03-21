import React, { useState } from 'react';

const MuralForm = ({ onAgregar }) => {
  const [nuevoElemento, setNuevoElemento] = useState('');

  // Manejar el cambio en el input
  const handleChange = (event) => {
    setNuevoElemento(event.target.value);
  };

  // Manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    if (nuevoElemento.trim() !== '') {
      // Llamar a la función onAgregar del padre para agregar el nuevo elemento
      onAgregar(nuevoElemento);
      // Limpiar el input después de agregar el elemento
      setNuevoElemento('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mural-form">
      <input
        type="text"
        placeholder="Agregar elemento al mural..."
        value={nuevoElemento}
        onChange={handleChange}
      />
      
      <button type="submit">Agregar</button>
    </form>
  );
};

export default MuralForm;
