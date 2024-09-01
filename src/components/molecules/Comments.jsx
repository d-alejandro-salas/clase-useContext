// src/components/molecules/Comments.jsx

import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContextProvider';

export const Comments = React.memo(({ comments }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`w-full space-y-4 p-4 ${darkMode ? 'bg-orange-800 text-white' : 'bg-orange-100 text-black'} border border-orange-200 rounded-lg shadow-md`}>
      {comments.length > 0 ? (
        comments.map((c, index) => (
          <div key={index} className="p-4 bg-white border border-orange-300 rounded-lg shadow-sm dark:bg-gray-700 dark:text-gray-300">
            <strong className="block text-orange-600 text-xl mb-2">{c.name}</strong>
            <p className="text-gray-800 dark:text-gray-400">{c.comment}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 dark:text-gray-300">No comments yet. Be the first to comment!</p>
      )}
    </div>
  );
});
