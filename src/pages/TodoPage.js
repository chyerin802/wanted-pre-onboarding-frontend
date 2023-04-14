import { Navigate } from 'react-router-dom';
import TodoList from 'components/TodoList';
import isLogin from 'utils/isLogin';

const TodoPage = () => {
  // 비로그인 상태로 Todo 페이지 접속 시 로그인 페이지로 리다이렉트
  if (!isLogin()) return <Navigate to="/signin" />;
  return (
    <div>
      <div>TodoPage</div>
      <TodoList></TodoList>
    </div>
  );
};

export default TodoPage;
