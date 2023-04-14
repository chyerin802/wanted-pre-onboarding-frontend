import { useState } from 'react';
import { createTodo } from 'api';

const TodoCreateForm = () => {
  const [newTodo, setNewTodo] = useState('');

  const handleTodoChange = (e) => setNewTodo(e.target.value);
  const handleTodoSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createTodo(newTodo);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleTodoSubmit}>
      <input
        type="text"
        data-testid="new-todo-input"
        value={newTodo}
        onChange={handleTodoChange}
      ></input>
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </form>
  );
};

export default TodoCreateForm;
