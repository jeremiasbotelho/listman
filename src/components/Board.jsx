import Column from "./Column";

function Board() {
  const columns = [
    {
      id: 1,
      title: "To Do",
      cards: [
        {
          id: 1,
          title: "Card 1",
          tasks: [
            { id: 1, description: "Fazer pesquisa" },
            { id: 2, description: "Escrever relatório" },
            { id: 2, description: "Exportar PDF" },
            { id: 2, description: "Falar com superior" },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "In Progress",
      cards: [
        {
          id: 2,
          title: "Card 2",
          tasks: [{ id: 3, description: "Testar funcionalidade" }],
        },
      ],
    },
  ];

  return (
    <div className="flex space-x-4 h-fit">
      {columns.map((column) => (
        <Column key={column.id} title={column.title} cards={column.cards} />
      ))}
    </div>
  );
}

export default Board;
