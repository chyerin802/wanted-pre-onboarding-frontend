import { useNavigate } from 'react-router-dom';
import useForm from 'hooks/useForm';
import authValidate from 'utils/authValidate';
import { signUpAsync } from 'api';
import TextInput from 'components/TextInput';

const SignUpForm = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleChange, handleSubmit } = useForm({
    initialValues: { email: '', password: '' },
    validate: authValidate,
    onSubmit: async (values) => {
      try {
        await signUpAsync(values);
        // 성공 시 /signin으로 리다이렉트
        navigate('/signin');
      } catch (err) {
        // 실패 시 alert
        alert(err?.response?.data?.message);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <TextInput
        type="text"
        name="email"
        id="email"
        data-testid="email-input"
        value={values.email}
        onChange={handleChange}
      ></TextInput>
      {touched.email && errors.email && <span>{errors.email}</span>}
      <label htmlFor="password">Password</label>
      <TextInput
        type="password"
        name="password"
        id="password"
        data-testid="password-input"
        value={values.password}
        onChange={handleChange}
      ></TextInput>
      {touched.password && errors.password && <span>{errors.password}</span>}
      <button
        data-testid="signup-button"
        disabled={Object.keys(errors).length !== 0}
      >
        submit
      </button>
    </form>
  );
};

export default SignUpForm;
