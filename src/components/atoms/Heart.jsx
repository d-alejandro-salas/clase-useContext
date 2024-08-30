import { useState, useEffect, useContext } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FavoritesContext } from '../../contexts/FavoritesContextProvider';

const Heart = ({ element }) => {
  const { favorites, addFavorite , removeFavorite } = useContext(FavoritesContext);

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const isFavorite = favorites.some((item) => item.id === element.id);
    setLiked(isFavorite);
    // 3. Actualización del estado inicial
    // `useEffect` se ejecuta después de que el componente se haya renderizado.
    // Verifica si el elemento `element` está en la lista de favoritos y actualiza el estado `liked` en consecuencia.
  }, [favorites, element.id]);
  // 4. Dependencias de `useEffect`
  // `useEffect` se vuelve a ejecutar cada vez que cambian `favorites` o `element.id`.

  const handleClick = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);
    (newLikedState) ? addFavorite(element) : removeFavorite(element);
    // 5. Manejo del clic
    // Cuando el usuario hace clic en el botón, el estado `liked` cambia.
    // Si `liked` se convierte en `true`, se añade el elemento a los favoritos.
    // Si `liked` se convierte en `false`, se elimina el elemento de los favoritos.
  };

  return (
    <button
      title="Click here to fav!"
      className="text-red-500 text-xl"
      onClick={handleClick}>
      {liked ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};

export { Heart };
