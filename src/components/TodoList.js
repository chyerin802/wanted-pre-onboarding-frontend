import { useEffect } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';
import { getTodos } from 'api';

const TodoList = ({ todoList, setTodoList }) => {
  useEffect(() => {
    const asyncGetTodoList = async () => {
      try {
        const res = await getTodos();
        setTodoList(res);
      } catch (err) {
        console.log(err);
      }
    };

    asyncGetTodoList();
  }, [setTodoList]);

  return (
    <ul>
      {todoList.map((el) => {
        return <Todo key={el.id} todo={el} />;
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  setTodoList: PropTypes.func.isRequired,
};

export default TodoList;
