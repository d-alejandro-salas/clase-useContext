// src/App.jsx

import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import {Nav} from './components/Nav'; // Navigation component
import LandingPage from './pages/LandingPage'; // Landing page component
import King from './pages/King'; // King page component
import Favorites from './pages/Favorites'; // Favorites page component

// Context
import { ThemeContext } from './contexts/ThemeContextProvider';

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <Nav />
      <main className={`${darkMode ? "bg-black" : "bg-white"} py-5 min-h-screen`}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:id" element={<King />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
