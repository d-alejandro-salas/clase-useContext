//src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContextProvider';
import { FavoritesContextProvider } from './contexts/FavoritesContextProvider'; // Importa el nombre correcto

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <FavoritesContextProvider> {/* Cambia a FavoritesContextProvider */}
        <App />
      </FavoritesContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
