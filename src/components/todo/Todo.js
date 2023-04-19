import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { updateTodo } from 'api/apis/todo';
import Button from 'components/Button';

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.75rem;
  > .todo-content {
    display: flex;
    align: center;
    gap: 0.5rem;
  }
`;

const TodoEditInput = styled.input`
  border: none;
  border-bottom: 1px solid var(--second-color);
  font-size: 1rem;
`;

const Todo = ({ id, todo, isCompleted, handleDeleteTodo }) => {
  // 현재 Todo의 값을 저장
  const [curTodo, setCurTodo] = useState({
    todo,
    isCompleted,
  });
  // 수정 모드 활성화 여부
  const [isEditMode, setIsEditMode] = useState(false);
  // 수정 모드에서 변화되는 Todo의 내용
  const [newTodoContent, setNewTodoContent] = useState(todo);

  // 수정 모드 시 input change handler
  const handleTodoInputChange = (e) => {
    setNewTodoContent(e.target.value);
  };

  // 제출 버튼 click handler
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

  // 취소 버튼 click handler
  const handleClickCancleBtn = async () => {
    setNewTodoContent(curTodo.todo);
    setIsEditMode(false);
  };

  // checkbox change handler
  const handleChangeCheckBox = async () => {
    const newTodo = { ...curTodo, isCompleted: !curTodo.isCompleted };
    try {
      await updateTodo(id, newTodo);
      setCurTodo(newTodo);
    } catch (err) {
      console.log(err);
    }
  };

  // 삭제 버튼 click handler
  const handleClickDelete = () => handleDeleteTodo(id);

  // 수정 모드 시
  if (isEditMode) {
    return (
      <TodoItem>
        <div className="todo-content">
          <input
            type="checkbox"
            checked={curTodo.isCompleted}
            onChange={handleChangeCheckBox}
          />
          <TodoEditInput
            data-testid="modify-input"
            type="text"
            value={newTodoContent}
            onChange={handleTodoInputChange}
            className="todo-edit-input"
          />
        </div>
        <div>
          <Button
            data-testid="submit-button"
            onClick={handleClickSubmitBtn}
            outline
          >
            제출
          </Button>
          <Button
            data-testid="cancel-button"
            onClick={handleClickCancleBtn}
            color="second"
            letter
          >
            취소
          </Button>
        </div>
      </TodoItem>
    );
  }

  return (
    <TodoItem>
      <label className="todo-content">
        <input
          type="checkbox"
          checked={curTodo.isCompleted}
          onChange={handleChangeCheckBox}
        />
        <span>{curTodo.todo}</span>
      </label>
      <div>
        <Button
          data-testid="modify-button"
          onClick={() => setIsEditMode(true)}
          color="second"
          letter
        >
          수정
        </Button>
        <Button
          data-testid="delete-button"
          onClick={handleClickDelete}
          color="second"
          letter
        >
          삭제
        </Button>
      </div>
    </TodoItem>
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
