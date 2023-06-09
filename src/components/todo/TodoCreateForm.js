import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { createTodo } from 'api';
import TextInput from 'components/TextInput';
import Button from 'components/Button';

const StyledTodoForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 2.75rem;

  > * {
    height: 100%;
  }

  > div {
    width: 100%;
  }
`;

const TodoCreateForm = ({ todoList, setTodoList }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleTodoChange = (e) => setNewTodo(e.target.value);
  const handleTodoSubmit = async (e) => {
    e.preventDefault();
    if (newTodo === '') {
      return;
    }

    try {
      const res = await createTodo(newTodo);
      setTodoList([...todoList, res]);
      setNewTodo('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledTodoForm onSubmit={handleTodoSubmit}>
      <TextInput>
        <input
          type="text"
          data-testid="new-todo-input"
          value={newTodo}
          onChange={handleTodoChange}
        ></input>
      </TextInput>
      <Button
        type="submit"
        data-testid="new-todo-add-button"
        size="medium"
        fullHeight
      >
        추가
      </Button>
    </StyledTodoForm>
  );
};

TodoCreateForm.propTypes = {
  todoList: PropTypes.array.isRequired,
  setTodoList: PropTypes.func.isRequired,
};

export default TodoCreateForm;
