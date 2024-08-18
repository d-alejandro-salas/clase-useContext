// src/App.jsx

import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "tailwindcss/tailwind.css";

// Components
import Nav from './components/Nav'; // Navigation component
import LandingPage from './pages/LandingPage'; // Landing page component
import King from './pages/King'; // King page component

// Context
import { ThemeContext } from './contexts/ThemeContextProvider'; // Ajusta la ruta según tu estructura de archivos

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <Nav />
      <main
        className={`${darkMode ? "bg-black" : "bg-white"} mt-4`}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:id" element={<King />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
