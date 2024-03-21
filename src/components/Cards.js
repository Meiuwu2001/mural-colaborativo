import React, { useState } from 'react';
import './CardComponent.css'; // Asegúrate de importar el archivo CSS de estilos

const CardComponent = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [archivo, setArchivo] = useState(null);
  const [showContent, setShowContent] = useState(true); // Cambiado a false

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleArchivoChange = (event) => {
    setArchivo(event.target.files[0]);
  };

  const handleSubmit = () => {
    // Aquí puedes manejar la lógica para enviar los datos y el archivo a donde sea necesario
    console.log('Nombre:', nombre);
    console.log('Descripción:', descripcion);
    console.log('Archivo:', archivo);
  };

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="card-container">
      <div className="card-header" onClick={toggleContent}>
        <h5 className="card-title">Nombre: {nombre}</h5>
      </div>
      <div className={showContent ? 'card-content' : 'hidden'}>
        <h5 className="card-title">Descripción: {descripcion}</h5>
        <input
          type="file"
          className="form-control-file"
          onChange={handleArchivoChange}
        />
        <button className="btn btn-primary mt-3" onClick={handleSubmit}>
          Enviar
        </button>
      </div>
    </div>
  );
  
};

export default CardComponent;
