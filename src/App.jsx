import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, editTodo } from './store/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleToggleTodo = id => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id, newText) => {
    dispatch(editTodo(id, newText));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Todo App</h1>
      <div className="d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button className="btn btn-primary ml-2" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
      <ul className="list-group mt-4">
        {todos.map(todo => (
          <li key={todo.id} className="list-group-item d-flex align-items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
              className="mr-3"
            />
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onDoubleClick={() => {
                const newText = prompt('Edit Todo:', todo.text);
                if (newText) {
                  handleEditTodo(todo.id, newText);
                }
              }}
            >
              {todo.text}
            </span>
            <button
              className="btn btn-danger ml-auto"
              onClick={() =>
              {
                const newText = prompt('Edit Todo:', todo.text);
                if (newText) {
                  handleEditTodo(todo.id, newText);
                }
              }}
            >
            Edit
            </button>
            <button
              className="btn btn-danger ml-auto"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
