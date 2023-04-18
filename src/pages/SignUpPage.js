import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from 'components/auth/SignUpForm';
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
      <div>SignUp</div>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignUpPage;
