import { Link } from 'react-router-dom';
import isLogin from 'utils/isLogin';

const MainPage = () => {
  return (
    <div>
      <div>Wanted Pre-onboarding</div>
      {isLogin() ? (
        <div>
          <Link to="/todo">
            <button>Todo</button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/signin">
            <button>SignIn</button>
          </Link>
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MainPage;
