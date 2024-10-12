// src/components/molecules/CommentForm.jsx

import { useState, useContext, useRef } from 'react';
import axios from 'axios';
import { ThemeContext } from '../../contexts/ThemeContextProvider';
import { CommentInput } from '../atoms/CommentInput'; // Importar el nuevo componente

export const CommentForm = ({ onAddComment }) => {
  const { darkMode } = useContext(ThemeContext);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const nameInputRef = useRef(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && comment) {
      try {
        setLoading(true);
        const response = await axios.post('http://localhost:3000/api/comments', {
          name,
          text: comment,
        });
        console.log("Comentario agregado:", response.data);

        // Llamar a la función que actualiza los comentarios en el padre
        onAddComment(response.data);

        setName('');
        setComment('');
        nameInputRef.current.focus();
      } catch (error) {
        console.error("Error al enviar el comentario:", error);
        setError("Hubo un problema al enviar el comentario.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className={`border border-orange-300 rounded-lg shadow-md ${darkMode ? 'bg-orange-800' : 'bg-orange-100'}`}>
      <CommentInput 
        name={name}
        setName={setName}
        comment={comment}
        setComment={setComment}
        nameInputRef={nameInputRef}
        loading={loading}
        handleKeyDown={handleKeyDown}
        error={error}
        onSubmit={handleSubmit}/>
    </div>
  );
};
