// src/pages/LandingPage.jsx

import { Link } from 'react-router-dom';
import imagesArray from '../assets/images/index.js';

function LandingPage() {
  return (
    <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Object.keys(imagesArray).map(key => (
        <Link key={key} to={`/${key}`}>
          <img
            src={imagesArray[key]}
            alt={key}
          />
        </Link>
      ))}
    </div>
  );
}

export default LandingPage;

