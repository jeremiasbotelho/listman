import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SettingsProvider } from "./context/SettingsContext";
import Sidebar from "./components/Sidebar";
import Settings from "./pages/Settings";
import Board from "./components/Board";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <SettingsProvider>
      <Router>
        <div className="flex">
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          <div
            className={`flex-1 transition-margin duration-300 ${
              isSidebarOpen ? "ml-0 md:ml-64" : "ml-0 md:ml-[56px]"
            }`}
          >
            <Routes>
              <Route path="/" element={<Board />} />
              <Route path="/settings" element={<Settings />} />
              <Route
                path="*"
                element={<div className="p-6">Página não encontrada</div>}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </SettingsProvider>
  );
}

export default App;
