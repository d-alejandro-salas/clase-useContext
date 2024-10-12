// src/components/atoms/CommentList.jsx

export const CommentList = ({ comment }) => {
    return (
      <div className="p-4 bg-white border border-orange-300 rounded-lg shadow-sm mb-2">
        <strong className="block text-orange-600 text-xl mb-2">{comment.name}</strong>
        <p className="text-gray-800">{comment.text}</p>
      </div>
    );
  };