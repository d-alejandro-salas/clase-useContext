//src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';

//The main App and the Tailwind style imported
import {App} from './App';
import "tailwindcss/tailwind.css";

//Contexts
import { ThemeProvider } from './contexts/ThemeContextProvider';
import { FavoritesContextProvider } from './contexts/FavoritesContextProvider';
import { CharactersProvider } from './contexts/CharactersContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <CharactersProvider>
        <FavoritesContextProvider>
          <App />
        </FavoritesContextProvider>
      </CharactersProvider>
    </ThemeProvider>
  </React.StrictMode>
);
