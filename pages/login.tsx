import LoginForm, { LoginFormTypes } from 'containers/LoginForm/LoginForm';

const Login: React.FC = () => {
  const handleSubmit = (values: LoginFormTypes): void => {
    console.log(values);
  };

  return (
    <LoginForm handleSubmit={handleSubmit}>
      <div>content</div>
    </LoginForm>
  );
};

export default Login;
