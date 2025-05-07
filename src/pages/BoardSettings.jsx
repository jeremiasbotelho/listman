import { useState } from "react";

function BoardSettings() {
  const [showTasks, setShowTasks] = useState(true);
  const [limitTasks, setLimitTasks] = useState(true);
  const [limitUnlimited, setLimitUnlimited] = useState(false);
  const [limitCount, setLimitCount] = useState(3);

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6 md:hidden">Board</h1>
      <div className="space-y-4">
        {/* Configuração: Mostrar tarefas */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
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
              aria-label={
                showTasks
                  ? "Desativar exibição de tarefas"
                  : "Ativar exibição de tarefas"
              }
            >
              <span
                className={`absolute h-4 w-4 bg-white rounded-full transition-transform ${
                  showTasks ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Sub-itens: Configurações de limite */}
          {showTasks && (
            <div className="mt-4 space-y-3 pl-4">
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700 font-medium">
                  Limitar itens visíveis
                </label>
                <button
                  onClick={() => setLimitTasks(!limitTasks)}
                  className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors focus:outline-none ${
                    limitTasks ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={
                    limitTasks
                      ? "Desativar limite de tarefas"
                      : "Ativar limite de tarefas"
                  }
                >
                  <span
                    className={`absolute h-4 w-4 bg-white rounded-full transition-transform ${
                      limitTasks ? "translate-x-7" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {limitTasks && (
                <div className="pl-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <label className="text-sm text-gray-700">Quantidade:</label>
                    <input
                      type="number"
                      min="1"
                      value={limitCount}
                      onChange={(e) => setLimitCount(parseInt(e.target.value))}
                      disabled={limitUnlimited}
                      className={`border rounded px-2 py-1 w-20 text-sm ${
                        limitUnlimited
                          ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                          : ""
                      }`}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setLimitUnlimited(!limitUnlimited)}
                      className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors focus:outline-none ${
                        limitUnlimited ? "bg-blue-600" : "bg-gray-300"
                      }`}
                      aria-label={
                        limitUnlimited
                          ? "Desativar modo ilimitado"
                          : "Ativar modo ilimitado"
                      }
                    >
                      <span
                        className={`absolute h-4 w-4 bg-white rounded-full transition-transform ${
                          limitUnlimited ? "translate-x-7" : "translate-x-1"
                        }`}
                      />
                    </button>
                    <span className="text-sm text-gray-700">Ilimitado</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BoardSettings;
