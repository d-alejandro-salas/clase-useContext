//scr/components/atoms/ModeButton.jsx

import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContextProvider';
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

export const ModeButton = () => {

  const { darkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button 
      className={`mr-4 px-4 py-2 rounded ${darkMode ? "text-black bg-white" : "text-white bg-gray-800"}`}
      onClick={toggleTheme}>
      <div className="scale-150">{darkMode ? <IoSunny /> : <IoMoon />}</div>
    </button>
  )
}