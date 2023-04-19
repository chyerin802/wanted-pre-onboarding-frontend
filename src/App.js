import { Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import TodoPage from './pages/TodoPage';
import MainPage from './pages/MainPage';
import MainLayOut from 'layouts/MainLayOut';

function App() {
  return (
    <MainLayOut>
      <Routes>
        <Route path="/signin" element={<SignInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/todo" element={<TodoPage />}></Route>
        <Route path="/*" element={<MainPage />}></Route>
      </Routes>
    </MainLayOut>
  );
}

export default App;
