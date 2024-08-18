import { createContext, useState } from 'react';

// Crear el contexto
export const ThemeContext = createContext();

// Componente proveedor del contexto
export const ThemeProvider = ({ children }) => {
  // Estado inicial como booleano
  const [darkMode, setDarkMode] = useState(false);

  // Alternar el estado del tema
  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
