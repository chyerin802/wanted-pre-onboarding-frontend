import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from 'components/auth/SignUpForm';
import Title from 'components/Title';
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
    <div>
      <Title>SignUp</Title>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignUpPage;
