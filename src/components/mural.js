import React, { useState } from 'react';
import './Mural.css'; // Archivo de estilos para el mural
import ImageUploader from './ImageUploader'; // Importar el componente ImageUploader
import MuralForm from './muralForm';

const Mural = () => {
  // Estado para almacenar el contenido del mural, incluyendo imágenes
  const [contenido, setContenido] = useState([]);

  // Función para agregar un nuevo elemento al mural (texto o imagen)
  const agregarElemento = (elemento) => {
    setContenido([...contenido, elemento]);
  };

  return (
    <div className="mural">
      <h1>Mural Colaborativo</h1>
      <div className="mural-contenido">
        {/* Renderizar los elementos del mural */}
        {contenido.map((elemento, index) => (
          <div key={index} className="elemento-mural">
            {/* Renderizar el contenido del elemento (texto o imagen) */}
            {elemento instanceof File ? (
              <img src={URL.createObjectURL(elemento)} alt={`Imagen ${index}`} />
            ) : (
              <p>{elemento}</p>
            )}
          </div>
        ))}
      </div>
      {/* Componente para agregar elementos al mural (texto o imagen) */}
      <MuralForm onAgregar={agregarElemento} />
     {/* Componente para cargar imágenes al mural arrastrándolas */}
     <ImageUploader onImageUpload={(imageFile) => agregarElemento(imageFile)} />
    </div>
  );
};

// Componente para el formulario de agregar elemento de texto al mural


export default Mural;
