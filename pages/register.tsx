import { useCallback } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import AuthLayout from 'containers/AuthLayout';
import RegisterForm, { RegisterFormTypes } from 'containers/RegisterForm';

import useTranslationPrefix from 'utils/useTranslationPrefix';

const Register: React.FC = () => {
  const tg = useTranslationPrefix('General');
  const t = useTranslationPrefix('Auth');

  const handleSubmit = useCallback((values: RegisterFormTypes): void => {
    console.log(values);
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
