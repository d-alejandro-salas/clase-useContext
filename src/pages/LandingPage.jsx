// src/pages/LandingPage.jsx

import { Link } from 'react-router-dom';
import kingsArray from '../utils/kingsIndex.js';
import { Heart } from '../components/atoms/Heart';

function LandingPage() {

  return (<>
  <h1 className="text-green-500 text-center uppercase mb-8 text-5xl">Visigothic kings</h1>
    <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {kingsArray.map((king, index) => (
        <div key={index} className="flex relative border border-yellow-500 rounded-xl hover:bg-yellow-500 p-2">
        <Heart king={king} />
        <Link to={`/${king.name}`}>
          <img
            src={king.image}
            alt={king.name}
            title={king.name}
            className="w-full h-auto object-cover"
          />
        </Link>
      </div>      
      ))}
    </div></>
  );
}

export default LandingPage;
