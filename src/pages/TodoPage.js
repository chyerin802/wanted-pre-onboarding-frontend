import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import TodoList from 'components/TodoList';
import TodoCreateForm from 'components/TodoCreateForm';
import { getTodos } from 'api';
import isLogin from 'utils/isLogin';

const TodoPage = () => {
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

    asyncGetTodoList();
  }, [setTodoList]);

  // 비로그인 상태로 Todo 페이지 접속 시 로그인 페이지로 리다이렉트
  if (!isLogin()) return <Navigate to="/signin" />;

  return (
    <div>
      <div>TodoPage</div>
      <TodoCreateForm todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default TodoPage;
