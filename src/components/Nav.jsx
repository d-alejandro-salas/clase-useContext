// src/components/Nav.jsx

import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ModeButton } from './atoms/ModeButton'; // Importa el botón para cambiar el modo
import { CharactersContext } from '../contexts/CharactersContext';
import { ThemeContext } from '../contexts/ThemeContextProvider';

export const Nav = () => {
  const { darkMode } = useContext(ThemeContext);
  const { characters } = useContext(CharactersContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`w-full ${darkMode ? "bg-orange-800" : "bg-orange-400"} p-3 uppercase`}>
      <div className="flex justify-between items-center  space-x-4">
        <div className="flex items-center">
          <NavLink
            to="/"
            className={`px-3 py-2 ${darkMode ? "bg-orange-900" : "bg-orange-600"} text-white hover:${darkMode ? "bg-orange-900" : "bg-sky-400"} hover:font-bold`}>
            HOME
          </NavLink>
          <button 
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
        <div className="hidden md:flex items-center">
          {characters.map((element) => (
            <NavLink
              className={`text-white no-underline p-2 hover:${darkMode ? "bg-orange-700" : "bg-orange-500"} hover:font-bold`}
              key={element.id}
              to={`/${element.name}`}
            >
              {element.name}
            </NavLink>
          ))}
          <NavLink
            to="/favorites"
            className={`px-3 py-2 space-x-4 ${darkMode ? "bg-orange-900" : "bg-orange-600"} text-white hover:${darkMode ? "bg-orange-900" : "bg-sky-400"} hover:font-bold`}>
            Favorites
          </NavLink>
        </div>
        <ModeButton />
      </div>
      {isOpen && (
        <div className="flex flex-col mt-4 space-y-2 md:hidden">
          {characters.map((element) => (
            <NavLink
              className={`text-white no-underline p-2 hover:${darkMode ? "bg-orange-700" : "bg-orange-500"} hover:font-bold`}
              key={element.id}
              to={`/${element.name}`}
            >
              {element.name}
            </NavLink>
          ))}
          <NavLink
            to="/favorites"
            className={`px-3 py-2 ${darkMode ? "bg-orange-900" : "bg-orange-600"} text-white hover:${darkMode ? "bg-orange-900" : "bg-sky-400"} hover:font-bold`}>
            Favorites
          </NavLink>
        </div>
      )}
    </nav>
  );
};
