// src/components/Nav.jsx

import { NavLink } from 'react-router-dom';
import imagesArray from '../assets/images/index.js';
import { ModeButton } from './atoms/Button'; // Asegúrate de que la ruta sea correcta
import './Nav.css';

function Nav() {
  return (
    <nav className="flex justify-between w-full bg-blue-400 p-2 uppercase">
      <div className="flex">
        <NavLink
          to="/"
          className="flex items-center px-2 text-white hover:bg-sky-400 hover:font-bold"
        >
          HOME
        </NavLink>
        <div className="flex items-center space-x-2">
          {imagesArray.map((item, index) => (
            <NavLink
              className="text-white no-underline p-2 hover:bg-sky-400 hover:font-bold"
              key={index}
              to={`/${item.name}`}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      <ModeButton />
    </nav>
  );
}

export default Nav;
