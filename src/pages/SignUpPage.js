import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SignUpForm from 'components/auth/SignUpForm';
import AuthLayOut from 'layouts/AuthLayOut';
import Button from 'components/Button';
import isLogin from 'utils/isLogin';

const SignUpPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin()) {
      navigate('/todo');
      return;
    }
  }, [navigate]);

  return (
    <AuthLayOut title="Sign Up">
      <SignUpForm></SignUpForm>
      <div className="auth-link">
        <Link to="/signin">
          <Button letter>sign in</Button>
        </Link>
      </div>
    </AuthLayOut>
  );
};

export default SignUpPage;
