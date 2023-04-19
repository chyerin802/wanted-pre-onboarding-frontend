import styled from 'styled-components';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { deleteTodo } from 'api/apis/todo';

const StyledTodoList = styled.ul`
  width: 100%;
`;

const TodoList = ({ todoList, setTodoList }) => {
  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodoList(todoList.filter((todo) => todo.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledTodoList>
      {todoList.map((el) => {
        return (
          <Todo
            key={el.id}
            id={el.id}
            todo={el.todo}
            isCompleted={el.isCompleted}
            handleDeleteTodo={handleDeleteTodo}
          />
        );
      })}
    </StyledTodoList>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  setTodoList: PropTypes.func.isRequired,
};

export default TodoList;
