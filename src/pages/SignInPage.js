import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from 'components/auth/SignInForm';
import Title from 'components/Title';
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
      <Title>SignIn</Title>
      <SignInForm></SignInForm>
    </div>
  );
};

export default SignInPage;
