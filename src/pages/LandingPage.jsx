// src/pages/LandingPage.jsx

import { Link } from 'react-router-dom';
import imagesArray from '../assets/images/index.js';
import { Heart } from '../components/atoms/Heart';

function LandingPage() {
  return (
    <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Object.keys(imagesArray).map(key => (
        <div key={key} className="flex items-center relative">
          <Heart item={key} />
          <Link to={`/${key}`}>
            <img
              src={imagesArray[key]}
              alt={key}
              className="w-full h-auto object-cover" // Ajusta el tamaño de la imagen si es necesario
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default LandingPage;
