import { memo } from 'react';
import { Formik, Form } from 'formik';

import InputText from 'components/InputText';
import Button from 'components/Button';

import useTranslationPrefix from 'utils/useTranslationPrefix';

type Props = {
  handleSubmit: (values: LoginFormTypes) => void;
};

export type LoginFormTypes = {
  username: string;
  password: string;
};

const LoginForm: React.FC<Props> = ({ handleSubmit }) => {
  const t = useTranslationPrefix('Auth');
  const initialValues: LoginFormTypes = { username: '', password: '' };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ errors, isSubmitting }) => (
        <Form>
          <InputText
            label={t('username')}
            name="username"
            type="text"
            placeholder={t('username')}
            error={errors.username}
          />
          <InputText
            label={t('password')}
            name="password"
            type="password"
            placeholder={t('password')}
            error={errors.password}
          />
          <Button text={t('log_in')} type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default memo(LoginForm);