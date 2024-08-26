// src/components/atoms/GroupButtons.jsx

import { useContext } from 'react';
import { CharactersContext } from '../../contexts/CharactersContext';

function GroupButtons() {
  const { handleGoodGuys, handleBadGuys, handleAll, buttonState } = useContext(CharactersContext);

  return (
    <div className="flex justify-center my-4 space-x-4 text-white font-bold">
      <button 
        onClick={handleAll}
        disabled={!buttonState.all}  // Deshabilita el botón si no está activo
        className={`py-2 px-4 rounded focus:outline-none ${
          buttonState.all ? 'bg-orange-500 hover:bg-orange-600' : 'bg-black border text-orange-600 border-orange-600 scale-125 cursor-not-allowed'
        }`}>
        TODOS
      </button>
      <button 
        onClick={handleGoodGuys}
        disabled={!buttonState.goodGuys}  // Deshabilita el botón si no está activo
        className={`py-2 px-4 rounded focus:outline-none ${
          buttonState.goodGuys ? 'bg-orange-500 hover:bg-orange-600' : 'bg-black border text-orange-600 border-orange-600 scale-125 cursor-not-allowed'
        }`}>
        BUENOS
      </button>
      <button 
        onClick={handleBadGuys}
        disabled={!buttonState.badGuys}  // Deshabilita el botón si no está activo
        className={`py-2 px-4 rounded focus:outline-none ${
          buttonState.badGuys ? 'bg-orange-500 hover:bg-orange-600' : 'bg-black border text-orange-600 border-orange-600 scale-125 cursor-not-allowed'
        }`}>
        MALOS
      </button>
    </div>
  );
}

export default GroupButtons;