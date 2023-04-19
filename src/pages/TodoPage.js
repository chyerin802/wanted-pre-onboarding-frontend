import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TodoList from 'components/todo/TodoList';
import TodoCreateForm from 'components/todo/TodoCreateForm';
import Title from 'components/Title';
import Button from 'components/Button';
import { getTodos } from 'api';
import isLogin from 'utils/isLogin';

const LogOutBtnWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const TodoPage = () => {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);

  const handleLogOutClick = () => {
    localStorage.removeItem('access_token');
    navigate('/signin');
  };

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
      <Title>Todo</Title>
      <TodoCreateForm todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <LogOutBtnWrapper>
        <Button onClick={handleLogOutClick} letter color="second">
          로그아웃
        </Button>
      </LogOutBtnWrapper>
    </div>
  );
};

export default TodoPage;
