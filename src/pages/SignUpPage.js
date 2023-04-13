import SignUpForm from 'components/SignUpForm';
import { Navigate } from 'react-router-dom';
import isLogin from 'utils/isLogin';

const SignUpPage = () => {
  if (isLogin()) return <Navigate to="/todo" />;
  return (
    <div>
      <div>SignUp</div>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignUpPage;
