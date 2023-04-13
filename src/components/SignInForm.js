import useForm from '../hooks/useForm';
import authValidate from '../utils/authValidate';

const SignInForm = () => {
  const { values, errors, touched, handleChange, handleSubmit } = useForm({
    initialValues: { email: '', password: '' },
    validate: authValidate,
    onSubmit: () => {
      alert('submit!');
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
