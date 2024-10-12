// src/components/molecules/Comments.jsx

import React, { useContext, useRef, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContextProvider';
import { CommentList } from '../atoms/CommentList';

export const Comments = React.memo(({ comments }) => {
  const { darkMode } = useContext(ThemeContext);
  const commentsEndRef = useRef(null);

  // Scroll automático al último comentario cuando se agrega uno nuevo
  useEffect(() => {
    commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [comments]);

  return (
    <div
      className={`w-full h-96 space-y-4 p-4 overflow-y-scroll ${
        darkMode
          ? 'bg-orange-800 text-white'
          : 'bg-orange-100 text-black'
      } border border-orange-200 rounded-lg shadow-md`}
    >
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <CommentList key={index} comment={comment} />
        ))
      ) : (
        <p className="text-gray-500">No hay comentarios aún. Sé el primero en comentar!</p>
      )}
      {/* Ancla para hacer scroll automático */}
      <div ref={commentsEndRef} />
    </div>
  );
});
