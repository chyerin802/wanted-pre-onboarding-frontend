import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from 'components/auth/SignInForm';
import isLogin from 'utils/isLogin';

const SignInPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log('hi');
    if (isLogin()) {
      navigate('/todo');
      return;
    }
  });

  return (
    <div>
      <div>SignIn</div>
      <SignInForm></SignInForm>
    </div>
  );
};

export default SignInPage;
