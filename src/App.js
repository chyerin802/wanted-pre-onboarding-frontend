import { Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import TodoPage from './pages/TodoPage';
import MainPage from './pages/MainPage';
import ErrorPage from 'pages/ErrorPage';
import MainLayOut from 'layouts/MainLayOut';

function App() {
  return (
    <MainLayOut>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/signin" element={<SignInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/todo" element={<TodoPage />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </MainLayOut>
  );
}

export default App;
