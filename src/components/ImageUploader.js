import React, { useState } from 'react';
import './ImageUploader.css'

const ImageUploader = ({ onImageUpload }) => {
  const [imageUrl, setImageUrl] = useState('');

  // Manejar el evento de soltar la imagen
  const handleDrop = (event) => {
    event.preventDefault();
    const imageFile = event.dataTransfer.files[0];
    if (imageFile.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(imageFile);
      setImageUrl(imageUrl);
      onImageUpload(imageFile); // Pasar el objeto File en lugar del Blob directamente
    }
  };

  // Prevenir el comportamiento predeterminado al arrastrar y soltar
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="image-uploader"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <p>Arrastra y suelta una imagen aquí</p>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const imageFile = e.target.files[0];
          if (imageFile) {
            const imageUrl = URL.createObjectURL(imageFile);
            setImageUrl(imageUrl);
            onImageUpload(imageFile); // Pasar el objeto File en lugar del Blob directamente
          }
        }}
      />
    </div>
  );
};

export default ImageUploader;
