// src/contexts/CharactersContext.jsx

import { createContext, useState, useEffect, useMemo, useReducer } from 'react';
import axios from 'axios';

export const CharactersContext = createContext();

const initialState = {
  badGuys: true,
  goodGuys: true,
  all: false,
};

function conmutador(state, click) { //It's used the name "conmutador" instead of the classic "reducer", because of pedagogical purposes. 
  switch (click.type) {
    case 'UNSHOW_BAD_GUYS':
      return { badGuys: false, goodGuys: true, all: true };
    case 'UNSHOW_GOOD_GUYS':
      return { badGuys: true, goodGuys: false, all: true };
    case 'UNSHOW_ALL':
      return { badGuys: true, goodGuys: true, all: false };
    default:
      return state;
  }
}

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [state, despachante] = useReducer(conmutador, initialState);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get("https://dragonball-api.com/api/characters?limit=13");
        setCharacters(response.data.items);
        setFilteredCharacters(response.data.items); // Initially, all the characters are shown.
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  const badGuys = useMemo(() => characters.filter(character => character.affiliation !== "Z Fighter"), [characters]);
  const goodGuys = useMemo(() => characters.filter(character => character.affiliation === "Z Fighter"), [characters]);

  const handleBadGuys = () => {
    despachante({ type: 'UNSHOW_BAD_GUYS' });
    setFilteredCharacters(badGuys);
  };

  const handleGoodGuys = () => {
    despachante({ type: 'UNSHOW_GOOD_GUYS' });
    setFilteredCharacters(goodGuys);
  };

  const handleAll = () => {
    despachante({ type: 'UNSHOW_ALL' });
    setFilteredCharacters(characters);
  };

  return (
    <CharactersContext.Provider value={{
      characters: filteredCharacters,
      setCharacters,
      handleGoodGuys,
      handleBadGuys,
      handleAll,
      buttonState: state,
    }}>
      {children}
    </CharactersContext.Provider>
  );
};