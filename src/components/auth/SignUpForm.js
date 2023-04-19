import { useNavigate } from 'react-router-dom';
import useForm from 'hooks/useForm';
import authValidate from 'utils/authValidate';
import { signUpAsync } from 'api';
import TextInput from 'components/TextInput';
import Button from 'components/Button';

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
      <TextInput>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          data-testid="email-input"
          value={values.email}
          onChange={handleChange}
        ></input>
      </TextInput>
      {touched.email && errors.email && (
        <span className="input__error-msg">{errors.email}</span>
      )}
      <TextInput>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          data-testid="password-input"
          value={values.password}
          onChange={handleChange}
        ></input>
      </TextInput>
      {touched.password && errors.password && (
        <span className="input__error-msg">{errors.password}</span>
      )}
      <Button
        data-testid="signup-button"
        disabled={Object.keys(errors).length !== 0}
        size="medium"
        fullWidth
      >
        Submit
      </Button>
    </form>
  );
};

export default SignUpForm;
