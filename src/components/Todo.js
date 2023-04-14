import PropTypes from 'prop-types';

const Todo = ({ todo }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.isCompleted} />
        <span>{todo.todo}</span>
      </label>
    </li>
  );
};

// props 타입 지정
Todo.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default Todo;
