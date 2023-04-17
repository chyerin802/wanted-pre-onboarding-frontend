import { useState } from 'react';
import PropTypes from 'prop-types';
import { updateTodo } from 'api/apis/todo';

const Todo = ({ id, todo, isCompleted, handleDeleteTodo }) => {
  const [curTodo, setCurTodo] = useState({
    todo,
    isCompleted,
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditModeOn = () => setIsEditMode(true);
  const handleEditModeOff = () => setIsEditMode(false);

  const handleTodoChange = (e) => {
    setCurTodo({ ...curTodo, todo: e.target.value });
  };

  const handleCheckBoxChange = async (e) => {
    const newTodo = { ...curTodo, isCompleted: !curTodo.isCompleted };
    try {
      await updateTodo(id, newTodo);
      setCurTodo(newTodo);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickDelete = () => handleDeleteTodo(id);

  if (isEditMode) {
    return (
      <li>
        <input
          type="checkbox"
          checked={curTodo.isCompleted}
          onChange={handleCheckBoxChange}
        />
        <input
          data-testid="modify-input"
          type="text"
          value={curTodo.todo}
          onChange={handleTodoChange}
        />
        <button data-testid="submit-button">제출</button>
        <button data-testid="cancel-button" onClick={handleEditModeOff}>
          취소
        </button>
      </li>
    );
  }
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={curTodo.isCompleted}
          onChange={handleCheckBoxChange}
        />
        <span>{curTodo.todo}</span>
      </label>
      <button data-testid="modify-button" onClick={handleEditModeOn}>
        수정
      </button>
      <button data-testid="delete-button" onClick={handleClickDelete}>
        삭제
      </button>
    </li>
  );
};

// props 타입 지정
Todo.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};

export default Todo;
