// src/components/atoms/CommentInput.jsx

export const CommentInput = ({
  name,
  setName,
  comment,
  setComment,
  nameInputRef,
  loading,
  handleKeyDown,
  error,
}) => {
  return (
    <form
      className={`w-full flex flex-col space-y-4 p-4 text-black`}
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tu nombre"
        ref={nameInputRef}
        className="p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        disabled={loading}
      />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Déjanos tu comentario"
        onKeyDown={handleKeyDown}
        className="p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        disabled={loading}
      />
      <button
        type="submit"
        className="py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
        disabled={loading}
      >
        {loading ? 'Enviando...' : 'Enviar'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};
