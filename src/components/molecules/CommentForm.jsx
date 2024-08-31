// src/components/molecules/CommentForm.jsx

import { useState, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContextProvider';

export const CommentForm = ({ onAddComment }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const { darkMode } = useContext(ThemeContext);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (name && comment) {
        onAddComment({ name, comment });
        setName('');
        setComment('');
      }
    };

    return (
      <form
        onSubmit={handleSubmit}
        className={`w-full flex flex-col space-y-4 p-4 ${
          darkMode ? 'bg-orange-800 text-white' : 'bg-orange-100 text-black'} border border-orange-300 rounded-lg shadow-md`}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={`p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500`}/>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Let us your comment"
          className={`p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500`}/>
        <button
          type="submit"
          className="py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
          Submit
        </button>
      </form>
    );
};