import { useState } from 'react';
import PropTypes from 'prop-types';
import { createTodo } from 'api';

const TodoCreateForm = ({ todoList, setTodoList }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleTodoChange = (e) => setNewTodo(e.target.value);
  const handleTodoSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createTodo(newTodo);
      setTodoList([...todoList, res]);
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

TodoCreateForm.propTypes = {
  todoList: PropTypes.array.isRequired,
  setTodoList: PropTypes.func.isRequired,
};

export default TodoCreateForm;
