// ButtonDelete.jsx
const ButtonDelete = ({ text, onClick, icon, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded ${className || ''}`}
    >
      {icon && <span className="inline-block mr-2 align-middle">{icon}</span>}
      {text}
    </button>
  );
};

export default ButtonDelete;
