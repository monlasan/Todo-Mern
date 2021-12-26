import './App.css';
import { useState, useEffect } from 'react';
import TodoList from './components/todos';
import AddForm from './components/app.form';
import AddBtn from './components/add.btn';

const axios = require('axios');
function App() {
  const baseURL = 'http://localhost:3001/api/todos';
  const [showAdd, setShowAdd] = useState(false);
  const [alltodos, setInAllTodos] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setInAllTodos(response.data);
      })
      .catch((err) => {
        console.log('Can get the server, make sure the server is running');
        console.log(err);
      });
  }, []);

  // console.log(alltodos);
  // Add todo
  const addTodo = (todo) => {
    axios
      .post(`${baseURL}/new`, {
        text: todo.text,
      })
      .then((response) => {
        // setInAllTodos(response.data);
        setInAllTodos([...alltodos, response.data]);
      })
      .catch((err) => {
        console.log('Can get the server, make sure the server is running');
        console.log(err);
      });
  };
  // Delete todo
  const deleteTodo = (id) => {
    axios
      .delete(`${baseURL}/delete/${id}`)
      .then((response) => {
        setInAllTodos(alltodos.filter((t) => t._id !== id));
      })
      .catch((err) => {
        console.log('Can get the server, make sure the server is running');
        console.log(err);
      });
  };
  // Update 'done' todo
  const UpdateTodo = (todo) => {
    console.log(todo.done);
    axios
      .put(`${baseURL}/complete/${todo._id}`, {
        done: !todo.done,
      })
      .then((response) => {
        setInAllTodos(
          alltodos.map((t) =>
            t._id === todo._id ? { ...t, done: !t.done } : t
          )
        );
      });
  };
  // Toggle the "Add new todo" box
  const showAddBox = () => {
    setShowAdd(!showAdd);
  };
  return (
    <div className="container">
      <h1>
        Mern<span style={{ color: 'crimson' }}>TO</span>
      </h1>
      <p className="sub">
        This is the ultimate mern application, the todo list.
      </p>
      <TodoList allTodos={alltodos} delTodo={deleteTodo} upTodo={UpdateTodo} />
      {showAdd && <AddForm addATodo={addTodo} showAdd={showAddBox} />}
      <AddBtn showAdd={showAddBox} />
    </div>
  );
}

export default App;
