import Card from "./Card";

function Column({ title, cards }) {
  return (
    <div className="w-72 bg-white rounded-lg shadow p-4 flex-shrink-0 max-h-screen overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-2">
        {cards.map((card) => (
          <Card key={card.id} title={card.title} tasks={card.tasks} />
        ))}
      </div>
    </div>
  );
}

export default Column;
