import { memo } from 'react';
import { Formik, Form } from 'formik';

import InputText from 'components/InputText';
import Button from 'components/Button';

import useTranslationPrefix from 'utils/useTranslationPrefix';
import { UserPositions } from 'types/enums';

type Props = {
  handleSubmit: (values: RegisterFormTypes) => void;
};

export type RegisterFormTypes = {
  username: string;
  password: string;
  passwordConfirm: string;
  email: string;
  userPosition?: UserPositions;
};

const RegisterForm: React.FC<Props> = ({ handleSubmit }) => {
  const t = useTranslationPrefix('Auth');

  const initialValues: RegisterFormTypes = {
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize>
      {({ errors, isSubmitting }) => (
        <Form>
          <InputText
            label={t('email')}
            name="email"
            type="email"
            placeholder={t('email')}
            error={errors.email}
          />
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
          <InputText
            label={t('retype_password')}
            name="passwordConfirm"
            type="password"
            placeholder={t('retype_password')}
            error={errors.passwordConfirm}
          />

          <Button text={t('register')} type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default memo(RegisterForm);
