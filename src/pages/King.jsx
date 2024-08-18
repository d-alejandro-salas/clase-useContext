// src/pages/King.jsx

import { useParams } from 'react-router-dom';
import imagesArray from '../assets/images/index.js';

function King() {
  // Obtiene el parámetro 'id' de la URL
  const { id } = useParams();

  // Verifica si el 'id' existe en el objeto imagesArray
  const imageSrc = imagesArray[id] || null; // Si no existe, será null

  return (
    <div className="flex flex-col items-center">
      <img
        className="mb-4"
        src={imageSrc}
        alt={id}
      />
      <h1 className="text-red-500 text-3xl font-extrabold uppercase">{id}</h1>
    </div>
  );
}

export default King;