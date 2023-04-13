import SignInForm from 'components/SignInForm';
import { Navigate } from 'react-router-dom';
import isLogin from 'utils/isLogin';

const SignInPage = () => {
  if (isLogin()) return <Navigate to="/todo" />;
  return (
    <div>
      <div>SignIn</div>
      <SignInForm></SignInForm>
    </div>
  );
};

export default SignInPage;
