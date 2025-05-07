import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white h-full fixed top-0 left-0 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"
        } ${
          isOpen ? "md:w-64" : "md:w-12"
        } md:translate-x-0 md:flex md:flex-col`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-end w-full p-3"
        >
          <svg
            className={`w-6 h-6 transition-colors duration-200 ${
              isOpen ? "rotate-180" : ""
            } hover:text-gray-300`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} md:${
            isOpen ? "block" : "hidden"
          } p-4 space-y-4`}
        >
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
      </div>
      {/* Overlay para fechar no mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;
