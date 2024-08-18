// src/components/atoms/Button.jsx

import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const ModeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button 
      className="mr-4 px-4 py-2 text-white font-bold rounded bg-gray-800"
      onClick={toggleTheme}>
      CHANGE MODE
    </button>
  )
}

