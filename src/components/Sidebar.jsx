import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-gray-800 text-white h-full transition-all duration-300 ${
        isOpen ? "w-64" : "w-12"
      } md:flex md:flex-col hidden`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 text-center hover:bg-gray-700"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 space-y-4">
          <h2 className="text-lg font-semibold">Listman</h2>
          <nav>
            <Link to="/" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Quadro
            </Link>
            <Link
              to="/settings"
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              Configurações
            </Link>
          </nav>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 p-2 bg-gray-800 rounded-full text-white"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  );
}

export default Sidebar;
