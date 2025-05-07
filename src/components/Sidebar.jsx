import { Link } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white h-full fixed top-0 left-0 z-50 overflow-hidden transition-[width] duration-300 ${
          isOpen ? "w-64" : "w-64 -translate-x-full"
        } md:${
          isOpen ? "w-64" : "!w-12 max-w-[48px]"
        } md:min-w-0 md:translate-x-0 md:flex md:flex-col`}
      >
        {/* Botão de expandir/recolher */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-end w-full p-2 md:p-3"
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
        {/* Conteúdo principal */}
        <div className="flex-1 flex flex-col">
          <nav
            className={`space-y-2 ${isOpen ? "p-4" : "p-2"} md:${
              isOpen ? "p-4" : "p-2"
            }`}
          >
            <Link
              to="/"
              className="flex items-center justify-start py-2 px-2 hover:bg-gray-700 rounded"
            >
              <svg
                className={`${
                  isOpen ? "w-6 h-6" : "w-5 h-5"
                } transition-[width,height] duration-300`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 17V7m0 10h6m-6 0H3m12-10v10m0-10H9m6 0h6"
                />
              </svg>
              <span
                className={`ml-3 ${isOpen ? "block" : "hidden"} md:${
                  isOpen ? "block" : "hidden"
                }`}
              >
                Quadro
              </span>
            </Link>
            <Link
              to="/settings/board"
              className="flex items-center justify-start py-2 px-2 hover:bg-gray-700 rounded"
            >
              <svg
                className={`${
                  isOpen ? "w-6 h-6" : "w-5 h-5"
                } transition-[width,height] duration-300`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span
                className={`ml-3 ${isOpen ? "block" : "hidden"} md:${
                  isOpen ? "block" : "hidden"
                }`}
              >
                Configurações
              </span>
            </Link>
          </nav>
          {/* Nome Listman na base */}
          <div
            className={`mt-auto p-4 ${isOpen ? "block" : "hidden"} md:${
              isOpen ? "block" : "hidden"
            }`}
          >
            <h2 className="text-lg font-semibold">Listman</h2>
          </div>
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
