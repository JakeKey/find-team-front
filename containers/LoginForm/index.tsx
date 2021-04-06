import { Formik, Form } from 'formik';

import InputText from 'components/InputText';

import useTranslationPrefix from 'utils/useTranslationPrefix';

import { Wrapper } from './styles';

type Props = {
  handleSubmit: (values: LoginFormTypes) => void;
};

export type LoginFormTypes = {
  username: string;
  password: string;
};

const LoginForm: React.FC<Props> = ({ children, handleSubmit }) => {
  const t = useTranslationPrefix('Auth');
  const initialValues: LoginFormTypes = { username: '', password: '' };

  return (
    <Wrapper>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ errors, isSubmitting }) => (
          <Form>
            <InputText
              name="username"
              type="text"
              placeholder={t('username')}
              error={errors.username}
            />
            <InputText
              name="password"
              type="password"
              placeholder={t('password')}
              error={errors.password}
            />
          </Form>
        )}
      </Formik>
      {children}
    </Wrapper>
  );
};

export default LoginForm;
