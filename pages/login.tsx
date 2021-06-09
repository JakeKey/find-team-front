import { useCallback, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import AuthLayout from 'containers/AuthLayout';
import LoginForm, { LoginFormTypes } from 'containers/LoginForm';
import LinkButton from 'components/LinkButton';

import { useAppDispatch, useAppSelector } from 'store';
import { authSelectors } from 'store/selectors';
import { loginAction } from 'store/actions';
import useAuth from 'hooks/useAuth';
import useTranslationPrefix from 'hooks/useTranslationPrefix';

const Login: React.FC = () => {
  useAuth({ redirectToDashboard: true });
  const tg = useTranslationPrefix('General');
  const t = useTranslationPrefix('Auth');
  const dispatch = useAppDispatch();
  const { error, success, isLoading } = useAppSelector(authSelectors.selectAuthState);

  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    if (error) {
      // TODO display error toast
    }
  }, [error]);

  const handleSubmit = useCallback(
    async (values: LoginFormTypes): Promise<void> => {
      if (!executeRecaptcha || isLoading) return; // TODO handle error
      const { usernameOrEmail, password } = values;
      const token = await executeRecaptcha('login');

      const isEmail = usernameOrEmail.includes('@');

      dispatch(
        loginAction({
          username: !isEmail ? usernameOrEmail : undefined,
          password,
          email: isEmail ? usernameOrEmail : undefined,
          reCaptchaResponse: token,
        })
      );
    },
    [executeRecaptcha, dispatch, isLoading]
  );

  return (
    <AuthLayout title={t('log_in')}>
      <LoginForm handleSubmit={handleSubmit} />
      <LinkButton text={t('no_account_register')} href="/register" />
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
