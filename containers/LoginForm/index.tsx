import { memo } from 'react';
import { Formik, Form } from 'formik';

import InputText from 'components/InputText';
import Button from 'components/Button';

import useTranslationPrefix from 'hooks/useTranslationPrefix';
import { validateLogin } from 'utils/validation';

type Props = {
  handleSubmit: (values: LoginFormTypes) => void;
};

export type LoginFormTypes = {
  usernameOrEmail: string;
  password: string;
};

const LoginForm: React.FC<Props> = ({ handleSubmit }) => {
  const t = useTranslationPrefix('Auth');
  const initialValues: LoginFormTypes = { usernameOrEmail: '', password: '' };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validateLogin}
      enableReinitialize
    >
      {({ errors, isSubmitting, isValid, dirty, touched }) => (
        <Form>
          <InputText
            label={t('username_or_email')}
            name="usernameOrEmail"
            type="text"
            placeholder={t('username')}
            error={touched.usernameOrEmail && errors.usernameOrEmail}
          />
          <InputText
            label={t('password')}
            name="password"
            type="password"
            placeholder={t('password')}
            error={touched.password && errors.password}
          />
          <Button text={t('log_in')} type="submit" disabled={isSubmitting || !isValid || !dirty} />
        </Form>
      )}
    </Formik>
  );
};

export default memo(LoginForm);
