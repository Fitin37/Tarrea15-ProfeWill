import { Plus } from "lucide-react";

const Button = ({ text, onClick, type = "button", icon: Icon = null }) => (
  <button
    type={type}
    onClick={onClick}
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition duration-300 ease-in-out flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
  >
    {Icon && <Icon size={16} />}
    {text}
  </button>
);
export default Button