import { useState } from "react";

function Card({ title, tasks }) {
  const [showAllTasks, setShowAllTasks] = useState(false);
  const showTasks = true; // A ser substituído por estado global
  const limitTasks = true; // A ser substituído por estado global
  const taskLimit = 3;

  const visibleTasks =
    showAllTasks || !limitTasks ? tasks : tasks.slice(0, taskLimit);

  return (
    <div className="bg-gray-50 p-3 rounded-md shadow-sm">
      <h4 className="font-medium mb-2">{title}</h4>
      {showTasks && (
        <>
          <ul className="list-disc pl-5">
            {visibleTasks.map((task) => (
              <li key={task.id} className="text-sm text-gray-700">
                {task.description}
              </li>
            ))}
          </ul>
          {limitTasks && tasks.length > taskLimit && (
            <button
              onClick={() => setShowAllTasks(!showAllTasks)}
              className="mt-2 text-blue-700 text-sm hover:underline"
            >
              {showAllTasks
                ? "Mostrar menos"
                : `Mostrar todas (${tasks.length})`}
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Card;
