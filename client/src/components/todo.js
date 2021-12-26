export default function todo({ todo, delTodo, upTodo }) {
  return (
    <div className="todo" onDoubleClick={() => upTodo(todo)}>
      <div className="text-box">
        <div className="done"></div>

        {/* {todo.done ? console.log('true') : console.log('false')} */}
        <div className={todo.done ? 'text linethrough' : 'text'}>
          {todo.text}
        </div>
      </div>
      <div
        className="delete"
        onDoubleClick={(e) => {
          e.stopPropagation();
        }}
        onClick={() => {
          delTodo(todo._id);
        }}
      ></div>
    </div>
  );
}
