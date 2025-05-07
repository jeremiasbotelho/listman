import { useState } from "react";

function Settings() {
  const [showTasks, setShowTasks] = useState(true);
  const [limitTasks, setLimitTasks] = useState(true);

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Configurações</h1>
      <div className="space-y-4">
        {/* Configuração: Mostrar tarefas */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-base font-semibold text-gray-900">
                Mostrar tarefas nos cards
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Exibe as tarefas diretamente nos cards no quadro.
              </p>
            </div>
            <button
              onClick={() => setShowTasks(!showTasks)}
              className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors focus:outline-none ${
                showTasks ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute h-4 w-4 bg-white rounded-full transition-transform ${
                  showTasks ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
        {/* Configuração: Limitar tarefas */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-base font-semibold text-gray-900">
                Limitar tarefas visíveis
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Mostra até 3 tarefas por card, com opção de exibir todas.
              </p>
            </div>
            <button
              onClick={() => setLimitTasks(!limitTasks)}
              className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors focus:outline-none ${
                limitTasks ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute h-4 w-4 bg-white rounded-full transition-transform ${
                  limitTasks ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
