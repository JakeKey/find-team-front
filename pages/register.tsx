import { useCallback } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import AuthLayout from 'containers/AuthLayout';
import RegisterForm, { RegisterFormTypes } from 'containers/RegisterForm';

import useTranslationPrefix from 'utils/useTranslationPrefix';
import { dispatch } from 'store';
import { registerAction } from 'store/actions';

const Register: React.FC = () => {
  const tg = useTranslationPrefix('General');
  const t = useTranslationPrefix('Auth');

  const handleSubmit = useCallback((values: RegisterFormTypes): void => {
    const { username, password, email } = values;
    dispatch(registerAction({ username, password, email }));
  }, []);

  return (
    <AuthLayout title={t('register')}>
      <RegisterForm handleSubmit={handleSubmit} />
    </AuthLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: locale
      ? {
          ...(await serverSideTranslations(locale, ['common'])),
        }
      : {},
  };
};

export default Register;
