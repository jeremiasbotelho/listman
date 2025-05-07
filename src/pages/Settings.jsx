import { useState } from "react";

function Settings() {
  const [showTasks, setShowTasks] = useState(true);
  const [taskLimit, setTaskLimit] = useState(3);

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Configurações</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Preferências do Quadro</h2>
        <div className="space-y-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={showTasks}
              onChange={() => setShowTasks(!showTasks)}
              className="h-5 w-5 text-blue-600"
            />
            <span>Mostrar tarefas nos cards</span>
          </label>
          <div>
            <label className="block text-sm font-medium mb-1">
              Limite de tarefas visíveis
            </label>
            <input
              type="number"
              value={taskLimit}
              onChange={(e) => setTaskLimit(Number(e.target.value))}
              min="1"
              className="w-20 p-2 border rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
