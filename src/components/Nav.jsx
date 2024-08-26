// src/components/Nav.jsx

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ModeButton } from './atoms/ModeButton'; // Importa el botón para cambiar el modo
import { ThemeContext } from '../contexts/ThemeContextProvider';
import { CharactersContext } from '../contexts/CharactersContext';

const Nav = () => {
  const { darkMode } = useContext(ThemeContext);
  const { characters } = useContext(CharactersContext);

  return (
    <nav className={`flex justify-between w-full ${darkMode ? "bg-orange-800" : "bg-orange-400"} p-2 uppercase`}>
      <div className="flex">
        <NavLink
          to="/"
          className={`flex items-center px-2 ${darkMode ? "bg-orange-900" : "bg-orange-600"} text-white hover:${darkMode ? "bg-orange-900" : "bg-sky-400"} hover:font-bold`}>
          HOME
        </NavLink>
        <div className="flex items-center space-x-2">
          {characters.map((element) => (
            <NavLink
              className={`text-white no-underline p-2 hover:${darkMode ? "bg-orange-700" : "bg-orange-500"} hover:font-bold`}
              key={element.id}
              to={`/${element.name}`}>
              {element.name}
            </NavLink>
          ))}
        </div>
        <NavLink
          to="/favorites"
          className={`flex items-center px-2 ${darkMode ? "bg-orange-900" : "bg-orange-600"} text-white hover:${darkMode ? "bg-orange-900" : "bg-sky-400"} hover:font-bold`}>
          Favorites
        </NavLink>
      </div>
      <ModeButton />
    </nav>
  );
}

export { Nav };
