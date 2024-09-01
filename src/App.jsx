// src/App.jsx

import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import { Nav } from './components/Nav'; // Navigation component
import { LandingPage } from './pages/LandingPage'; // Landing page component
import {Character} from './pages/Character'; // Character page component
import Favorites from './pages/Favorites'; // Favorites page component

// Context
import { ThemeContext } from './contexts/ThemeContextProvider';
import { Aside } from './components/Aside';

export const App = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <Nav />
      <main
        className={`${
          darkMode ? 'bg-black' : 'bg-white'
        } py-5 min-h-screen flex flex-col lg:flex-row items-start`}
      >
        <div className="flex-grow w-full lg:w-3/4 p-4">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/:id" element={<Character />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
        <div className="w-full lg:w-1/4 p-4">
          <Aside />
        </div>
      </main>
    </BrowserRouter>
  );
};