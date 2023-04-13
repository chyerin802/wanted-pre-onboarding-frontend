import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <div>Wanted Pre-onboarding</div>
      <Link to="/signin">
        <button>SignIn</button>
      </Link>
      <Link to="/signup">
        <button>SignUp</button>
      </Link>
    </div>
  );
};

export default MainPage;
