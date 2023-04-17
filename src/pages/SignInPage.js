import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from 'components/SignInForm';
import isLogin from 'utils/isLogin';

const SignInPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin()) {
      navigate('/todo');
      return;
    }
  }, [navigate]);

  return (
    <div>
      <div>SignIn</div>
      <SignInForm></SignInForm>
    </div>
  );
};

export default SignInPage;
