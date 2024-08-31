// src/pages/LandingPage.jsx

import { Link } from 'react-router-dom';
import { Heart } from '../components/atoms/Heart';
import GroupButtons from '../components/atoms/GroupButtons';
import { useContext } from 'react';
import { CharactersContext } from '../contexts/CharactersContext';

function LandingPage() {

  const { characters } = useContext(CharactersContext);

  return (<>
    <h1 className="text-green-500 text-center uppercase mb-8 text-5xl">Z Warriors</h1>
    <GroupButtons/>
    <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {characters.map((element) => (
        <div key={element.id} className="flex items-start justify-center relative border border-orange-600 rounded-xl hover:bg-yellow-500 p-2">
          <Heart element={element} />
          <Link to={`/${element.name}`}>
            <img
              style={{
                width: 'auto',
                height: '350px',
                objectFit: 'contain'
              }}
              src={element.image}
              alt={element.name}
              title={element.name}
              className="w-auto h-[400px] object-cover"
            />
          </Link>
        </div>    
      ))}
    </div></>
  );
}

export default LandingPage;
