import { useState } from 'react';
import PropTypes from 'prop-types';
import { updateTodo } from 'api/apis/todo';

const Todo = ({ id, todo, isCompleted, handleDeleteTodo }) => {
  // 서버에 반영될 Todo의 값들을 저장
  const [curTodo, setCurTodo] = useState({
    todo,
    isCompleted,
  });
  // 수정 모드 활성화 여부
  const [isEditMode, setIsEditMode] = useState(false);
  // 수정 모드에서 변화되는 Todo의 내용
  const [newTodoContent, setNewTodoContent] = useState(todo);

  const handleTodoInputChange = (e) => {
    setNewTodoContent(e.target.value);
  };

  const handleClickSubmitBtn = async () => {
    // 기존 내용에서 변화가 없을 때
    if (newTodoContent === curTodo.todo) {
      // 서버에 불필요한 요청 없이 수정 모드 off
      setIsEditMode(false);
      return;
    }

    const newTodo = { ...curTodo, todo: newTodoContent };

    try {
      await updateTodo(id, newTodo);
      setCurTodo(newTodo);
      setIsEditMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickCancleBtn = async () => {
    setNewTodoContent(curTodo.todo);
    setIsEditMode(false);
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
          value={newTodoContent}
          onChange={handleTodoInputChange}
        />
        <button data-testid="submit-button" onClick={handleClickSubmitBtn}>
          제출
        </button>
        <button data-testid="cancel-button" onClick={handleClickCancleBtn}>
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
