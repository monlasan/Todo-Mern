import { useState } from 'react';

const Appform = ({ addATodo, showAdd }) => {
  const [newTodo, setNewTodo] = useState('');

  const addAtask = (e) => {
    e.preventDefault();
    let newT = {
      // id: Math.floor(Math.random() * 1000),
      text: newTodo,
      done: false,
    };
    addATodo(newT);
    showAdd();
    setNewTodo('');
  };

  return (
    <>
      <div className="screen"></div>
      <div className="add-form">
        <form onSubmit={addAtask}>
          <input
            type="text"
            name=""
            id=""
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
            placeholder="Add todo"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default Appform;
