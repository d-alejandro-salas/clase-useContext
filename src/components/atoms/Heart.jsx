import { useState, useContext } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FavoritesContext } from '../../contexts/FavoritesContextProvider'; // Import the FavoritesContext

const Heart = ({ king }) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const [liked, setLiked] = useState(false); // Initialize liked with a boolean value

  const handleClick = () => {
    setLiked(prevStatus => !prevStatus);

    
    //ESTA PORQUERÍA NO FUNCIONA xd
    if (liked) {
      // Add the king to favorites when liked
      setFavorites(prevFavorites => [...prevFavorites, king]);
    } else {
      // Remove the king from favorites when unliked
      setFavorites(prevFavorites => prevFavorites.filter(fav => fav !== king));
    }

    console.log(favorites)
  };

  return (
    <button
      title="Click here to fav!"
      className="text-red-500 absolute top-0 left-0 m-4 text-xl"
      onClick={handleClick}
    >
      {liked ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};

export { Heart };
