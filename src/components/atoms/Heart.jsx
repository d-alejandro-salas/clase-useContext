import { useState } from 'react';
import { FavoritesContext } from '../../contexts/FavoritesContext'; // Importa el contexto de favoritos
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Heart = () => {

    const [liked,setLiked] = useState()
    
    const handleClick = () => {
        setLiked(prevStatus => !prevStatus);
    }

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
