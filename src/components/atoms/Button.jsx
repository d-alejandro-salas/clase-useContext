import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContextProvider';

export const ModeButton = () => {

  const { darkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button 
      className={`mr-4 px-4 py-2 font-bold rounded ${darkMode ? "text-black bg-white" : "text-white bg-gray-800"}`}
      onClick={toggleTheme}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  )
}