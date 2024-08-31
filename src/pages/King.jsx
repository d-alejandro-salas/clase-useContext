// src/pages/King.jsx

import { useParams } from 'react-router-dom';
import { Heart } from '../components/atoms/Heart';
import { CharactersContext } from '../contexts/CharactersContext';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContextProvider'; // Importa el ThemeContext

function King() {
  const { characters } = useContext(CharactersContext);
  const { darkMode } = useContext(ThemeContext); // Obtiene el estado darkMode del contexto
  // Obtiene el parámetro 'id' de la URL
  const { id } = useParams();
  
  // Encuentra el objeto en el array que tenga el nombre igual al parámetro 'id'
  const element = characters?.find(element => element.name === id);
    
  return (
    <>
      {
        element ? (
          <div className="flex flex-col items-center max-w-max mx-auto">
            <div className="flex relative my-4 w-3/5">
              <img
                style={{
                  width: '250px',
                  height: 'auto',
                  objectFit: 'contain'
                }}
                className="m-auto h-[400px] object-cover mb-4"
                src={element.image}
                alt={id}
              />
            </div>
            <div className='flex justify-between relative w-1/2 items-center'>
              <h1 className="text-red-500 text-3xl font-extrabold uppercase">{element.name}</h1>
              <Heart element={element} />
            </div>
            <p className={`text-${!darkMode ? "black" : "white"} w-1/2 text-justify mb-4`}>
              {element.description}
            </p>
          </div>
        ) : (
          <p>Cargando...</p>
        )
      }
    </>
  );
}

export default King;

