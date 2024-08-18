// src/pages/LandingPage.jsx

import { Link } from 'react-router-dom';
import imagesArray from '../assets/images/index.js';
import { Heart } from '../components/atoms/Heart';

function LandingPage() {
  return (<>
  <h1 className="text-green-500 text-center uppercase mb-8 text-5xl">Visigothic kings</h1>
    <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {imagesArray.map((item, index) => (
        <div key={index} className="flex items-center relative">
          <Heart item={item.name} /> {/* Asegúrate de que Heart acepte el nombre del rey como prop */}
          <Link to={`/${item.name}`}>
            <img
              src={item.image}
              alt={item.name}
              title={item.name}
              className="w-full h-auto object-cover" // Ajusta el tamaño de la imagen si es necesario
            />
          </Link>
        </div>
      ))}
    </div></>
  );
}

export default LandingPage;
