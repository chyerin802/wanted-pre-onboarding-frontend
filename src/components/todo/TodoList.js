import Todo from './Todo';
import PropTypes from 'prop-types';
import { deleteTodo } from 'api/apis/todo';

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
    <ul>
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
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  setTodoList: PropTypes.func.isRequired,
};

export default TodoList;
