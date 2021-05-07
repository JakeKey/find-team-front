import { useCallback } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import AuthLayout from 'containers/AuthLayout';
import RegisterForm, { RegisterFormTypes } from 'containers/RegisterForm';

import useTranslationPrefix from 'utils/useTranslationPrefix';
import { dispatch } from 'store';
import { registerAction } from 'store/actions';

const Register: React.FC = () => {
  const tg = useTranslationPrefix('General');
  const t = useTranslationPrefix('Auth');

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = useCallback(
    async (values: RegisterFormTypes): Promise<void> => {
      if (!executeRecaptcha) return; // TODO handle error
      const { username, password, email } = values;
      const token = await executeRecaptcha('login_page');

      dispatch(registerAction({ username, password, email, reCaptchaResponse: token }));
    },
    [executeRecaptcha]
  );

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
