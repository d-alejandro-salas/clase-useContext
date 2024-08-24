// src/pages/Favorites.jsx

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContextProvider';
import { Heart } from '../components/atoms/Heart';
import rey_incognito from '../assets/images/rey_incognito.png';

function Favorites() {
    const { favorites } = useContext(FavoritesContext);

    return (
        Array.isArray(favorites) && favorites.length > 0
        ? (
            <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {favorites.map((king, index) => (
                    <div key={index} className="mx-auto flex flex-col items-center justify-center relative w-full border border-yellow-500 rounded-xl">
                        <Heart king={king} />
                        <Link to={`/${king.name}`} className="w-full flex justify-center mb-2">
                            <img
                                src={king.image}
                                alt={king.name}
                                title={king.name}
                                className="w-full h-auto object-cover"
                            />
                        </Link>
                        <h1 className="text-green-500 text-3xl font-extrabold uppercase text-center">
                            {king.name}
                        </h1>
                    </div>
                ))}
            </div>
        )
        : (
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl text-red-500 font-bold mb-4">NO FAVORITES YET</h1>
                <div className='bg-white p-4'>
                <img src={rey_incognito} alt="No favorites" className="w-48 h-auto" /></div>
            </div>
        )
    );
}

export default Favorites;
