import { useState } from 'react';
import PropTypes from 'prop-types';
import { updateTodo } from 'api/apis/todo';

const Todo = ({ id, todo, isCompleted }) => {
  const [curTodo, setCurTodo] = useState({
    todo,
    isCompleted,
  });

  const handleCheckBoxChange = async (e) => {
    const newTodo = { ...curTodo, isCompleted: !curTodo.isCompleted };
    try {
      await updateTodo(id, newTodo);
      setCurTodo(newTodo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={curTodo.isCompleted}
          onChange={handleCheckBoxChange}
        />
        <span>{todo}</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button">삭제</button>
    </li>
  );
};

// props 타입 지정
Todo.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default Todo;
