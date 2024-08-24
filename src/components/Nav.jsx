// src/components/Nav.jsx

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import kingsArray from '../utils/kingsIndex.js';
import { ModeButton } from './atoms/Button'; // Importa el botón para cambiar el modo
import { ThemeContext } from '../contexts/ThemeContextProvider';

const Nav = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <nav className={`flex justify-between w-full ${darkMode ? "bg-gray-800" : "bg-blue-400"} p-2 uppercase`}>
      <div className="flex">
        <NavLink
          to="/"
          className={`flex items-center px-2 ${darkMode ? "bg-gray-900" : "bg-blue-600"} text-white hover:${darkMode ? "bg-gray-900" : "bg-sky-400"} hover:font-bold`}>
          HOME
        </NavLink>
        <div className="flex items-center space-x-2">
          {kingsArray.map((king, index) => (
            <NavLink
              className={`text-white no-underline p-2 hover:${darkMode ? "bg-gray-700" : "bg-blue-500"} hover:font-bold`}
              key={index}
              to={`/${king.name}`}>
              {king.name}
            </NavLink>
          ))}
        </div>
        <NavLink
          to="/favorites"
          className={`flex items-center px-2 ${darkMode ? "bg-gray-900" : "bg-blue-600"} text-white hover:${darkMode ? "bg-gray-900" : "bg-sky-400"} hover:font-bold`}>
          Favorites
        </NavLink>
      </div>
      <ModeButton />
    </nav>
  );
}

export { Nav };
