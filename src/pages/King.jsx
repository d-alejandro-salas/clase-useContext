// src/pages/King.jsx

import { useParams } from 'react-router-dom';
import kingsArray from '../utils/kingsIndex.js';

function King() {
  // Obtiene el parámetro 'id' de la URL
  const { id } = useParams();

  // Encuentra el objeto en el array que tenga el nombre igual al parámetro 'id'
  const king = kingsArray.find(king => king.name === id);

  return (
    <div className="flex flex-col items-center">
        <img
          className="mb-4"
          src={king.image}
          alt={id}
        />
      <h1 className="text-red-500 text-3xl font-extrabold uppercase">{id}</h1>
      <p className="text-lg text-blue-500">Years of reign: {king.reign}.</p>
    </div>
  );
}

export default King;
