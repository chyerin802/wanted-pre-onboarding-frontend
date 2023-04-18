import { useNavigate } from 'react-router-dom';
import useForm from 'hooks/useForm';
import authValidate from 'utils/authValidate';
import { signInAsync } from 'api';

const SignInForm = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleChange, handleSubmit } = useForm({
    initialValues: { email: '', password: '' },
    validate: authValidate,
    onSubmit: async (values) => {
      try {
        await signInAsync(values);
        // 성공 시 /todo로 리다이렉트
        navigate('/todo');
      } catch (err) {
        console.log(err);
        if (err?.response?.status === 401 || err?.response?.status === 404)
          alert('이메일 또는 비밀번호를 다시 확인하세요');
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        data-testid="email-input"
        value={values.email}
        onChange={handleChange}
      ></input>
      {touched.email && errors.email && <span>{errors.email}</span>}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        data-testid="password-input"
        value={values.password}
        onChange={handleChange}
      ></input>
      {touched.password && errors.password && <span>{errors.password}</span>}
      <button
        data-testid="signin-button"
        disabled={Object.keys(errors).length !== 0}
      >
        submit
      </button>
    </form>
  );
};

export default SignInForm;
