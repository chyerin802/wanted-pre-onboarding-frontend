import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoList from 'components/todo/TodoList';
import TodoCreateForm from 'components/todo/TodoCreateForm';
import { getTodos } from 'api';
import isLogin from 'utils/isLogin';

const TodoPage = () => {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const asyncGetTodoList = async () => {
      try {
        const res = await getTodos();
        setTodoList(res);
      } catch (err) {
        console.log(err);
      }
    };

    // 비로그인 상태로 Todo 페이지 접속 시 아무 동작 없이 로그인 페이지로 리다이렉트
    if (!isLogin()) {
      navigate('/signin');
      return;
    }

    asyncGetTodoList();
  }, [navigate, setTodoList]);

  return (
    <div>
      <div>TodoPage</div>
      <TodoCreateForm todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default TodoPage;
