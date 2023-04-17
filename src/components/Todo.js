import { useState } from 'react';
import PropTypes from 'prop-types';
import { updateTodo } from 'api/apis/todo';

const Todo = ({ id, todo, isCompleted, handleDeleteTodo }) => {
  const [curTodo, setCurTodo] = useState({
    todo,
    isCompleted,
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const handleTodoChange = (e) => {
    setCurTodo({ ...curTodo, todo: e.target.value });
  };

  const handleClickSubmitBtn = async () => {
    if (curTodo.todo === todo) {
      setIsEditMode(false);
      return;
    }

    try {
      await updateTodo(id, { ...curTodo, todo: curTodo.todo });
      setIsEditMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeCheckBox = async () => {
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
          onChange={handleChangeCheckBox}
        />
        <input
          data-testid="modify-input"
          type="text"
          value={curTodo.todo}
          onChange={handleTodoChange}
        />
        <button data-testid="submit-button" onClick={handleClickSubmitBtn}>
          제출
        </button>
        <button
          data-testid="cancel-button"
          onClick={() => setIsEditMode(false)}
        >
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
          onChange={handleChangeCheckBox}
        />
        <span>{curTodo.todo}</span>
      </label>
      <button data-testid="modify-button" onClick={() => setIsEditMode(true)}>
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
