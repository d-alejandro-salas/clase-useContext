//src/context/ThemeContext.jsx

import { createContext, useState } from 'react';

// Crear el contexto
export const FavoritesContext = createContext();

// Componente proveedor del contexto
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

