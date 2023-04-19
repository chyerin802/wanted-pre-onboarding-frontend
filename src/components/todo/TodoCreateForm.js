import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { createTodo } from 'api';
import TextInput from 'components/TextInput';

const StyledTodoForm = styled.form`
  display: flex;
  align-items: center;
`;

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
    <StyledTodoForm onSubmit={handleTodoSubmit}>
      <TextInput
        type="text"
        data-testid="new-todo-input"
        value={newTodo}
        onChange={handleTodoChange}
      ></TextInput>
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </StyledTodoForm>
  );
};

TodoCreateForm.propTypes = {
  todoList: PropTypes.array.isRequired,
  setTodoList: PropTypes.func.isRequired,
};

export default TodoCreateForm;
