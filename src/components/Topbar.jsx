function Topbar({ toggleSidebar }) {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-800 text-white h-14 flex items-center px-4 z-50">
      <button onClick={toggleSidebar} className="p-2">
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <h1 className="text-lg font-semibold">Listman</h1>
    </div>
  );
}

export default Topbar;
