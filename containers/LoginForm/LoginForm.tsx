import { Formik, Form } from 'formik';

import InputText from 'components/InputText';

import { Wrapper } from './styles';

type Props = {
  handleSubmit: (values: LoginFormTypes) => void;
};

export type LoginFormTypes = {
  login: string;
  password: string;
};

const LoginForm: React.FC<Props> = ({ children, handleSubmit }) => {
  const initialValues: LoginFormTypes = { login: '', password: '' };

  return (
    <Wrapper>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ errors, isSubmitting }) => (
          <Form>
            <InputText name="login" placeholder="login" error={errors.login} />
            <InputText name="password" placeholder="password" error={errors.password} />
          </Form>
        )}
      </Formik>
      {children}
    </Wrapper>
  );
};

export default LoginForm;
