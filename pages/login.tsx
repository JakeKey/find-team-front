import { useCallback } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import AuthLayout from 'containers/AuthLayout';
import LoginForm, { LoginFormTypes } from 'containers/LoginForm';

import useTranslationPrefix from 'utils/useTranslationPrefix';

const Login: React.FC = () => {
  const tg = useTranslationPrefix('General');
  const t = useTranslationPrefix('Auth');

  const handleSubmit = useCallback((values: LoginFormTypes): void => {
    console.log(values);
  }, []);

  return (
    <AuthLayout title={t('log_in')}>
      <LoginForm handleSubmit={handleSubmit} />
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

export default Login;
