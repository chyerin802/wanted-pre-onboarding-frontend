import Todo from './Todo';
import PropTypes from 'prop-types';

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((el) => {
        return (
          <Todo
            key={el.id}
            id={el.id}
            todo={el.todo}
            isCompleted={el.isCompleted}
          />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
};

export default TodoList;
