import Todo from './todo';

export default function todos({ allTodos, delTodo, upTodo }) {
  return (
    <div className="todos-list">
      {allTodos.map((t) => (
        <Todo key={t._id} todo={t} delTodo={delTodo} upTodo={upTodo} />
      ))}
    </div>
  );
}
