// src/contexts/FavoritesContextProvider.jsx

import { createContext, useState } from "react";

// 1. Creación del contexto
export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favoritos')) || []
  );
// 3. Inicialización del estado
// Aquí se usa `useState` para crear un estado llamado `favorites`. Este estado se inicializa con los datos guardados en `localStorage` (si existen), o un array vacío si no hay datos.
// `localStorage.getItem('favoritos')` obtiene los favoritos guardados en el navegador.
// `JSON.parse` convierte la cadena de texto de `localStorage` a un array de objetos JavaScript.

  const addFavorite = (king) => {
    const exists = favorites.some((item) => item.id === king.id);
    // 4. Comprobación de existencia
    // `some` verifica si el `king` ya existe en `favorites`.

    if (!exists) {
      const updatedFavorites = [...favorites, king];
      setFavorites(updatedFavorites);
      localStorage.setItem('favoritos', JSON.stringify(updatedFavorites));
      // 5. Añadir un favorito
      // Si `king` no existe en `favorites`, se añade al array de favoritos.
      // Luego, se actualiza el estado `favorites` y se guarda en `localStorage`.
    }
  };

  const removeFavorite = (king) => {
    const updatedFavorites = favorites.filter((item) => item.id !== king.id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favoritos', JSON.stringify(updatedFavorites));
    // 6. Eliminar un favorito
    // `filter` crea un nuevo array sin el elemento `king` y actualiza el estado `favorites` y `localStorage`.
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
