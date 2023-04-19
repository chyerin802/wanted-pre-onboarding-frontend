import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SignInForm from 'components/auth/SignInForm';
import AuthLayOut from 'layouts/AuthLayOut';
import isLogin from 'utils/isLogin';
import Button from 'components/Button';

const SignInPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin()) {
      navigate('/todo');
      return;
    }
  });

  return (
    <AuthLayOut title="Sign In">
      <SignInForm></SignInForm>
      <div className="auth-link">
        <Link to="/signup">
          <Button letter>sign up</Button>
        </Link>
      </div>
    </AuthLayOut>
  );
};

export default SignInPage;
