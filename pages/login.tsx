import { useCallback } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { toast } from 'react-toastify';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import AuthLayout from 'containers/AuthLayout';
import LoginForm, { LoginFormTypes } from 'containers/LoginForm';
import LinkButton from 'components/LinkButton';

import { useAppDispatch, useAppSelector } from 'store';
import { authSelectors } from 'store/selectors';
import { loginAction, unsetAuthStatesAction } from 'store/actions';
import useAuth from 'hooks/useAuth';
import useTranslationPrefix from 'hooks/useTranslationPrefix';
import useToastCustom from 'hooks/useToastCustom';
import { ErrorCodes } from 'types/enums';

const Login: React.FC = () => {
  useAuth({ redirectToDashboard: true });
  const t = useTranslationPrefix('Auth');
  const tc = useTranslationPrefix('Codes');
  const dispatch = useAppDispatch();
  const { error, success, isLoading } = useAppSelector(authSelectors.selectAuthState);
  useToastCustom({ unsetAction: unsetAuthStatesAction, error, success });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = useCallback(
    async (values: LoginFormTypes): Promise<void> => {
      if (!executeRecaptcha) {
        toast.error(tc(ErrorCodes.INVALID_CAPTCHA));
        return;
      }
      const token = await executeRecaptcha('login');
      if (isLoading) {
        toast.error(tc(ErrorCodes.SOMETHING_WENT_WRONG));
        return;
      }

      const { usernameOrEmail, password } = values;
      const isEmail = usernameOrEmail.includes('@');

      dispatch(
        loginAction({
          username: !isEmail ? usernameOrEmail : undefined,
          password,
          email: isEmail ? usernameOrEmail : undefined,
          reCaptchaResponse: token,
        }),
      );
    },
    [executeRecaptcha, dispatch, isLoading, tc],
  );

  return (
    <AuthLayout title={t('log_in')}>
      <LoginForm handleSubmit={handleSubmit} />
      <LinkButton text={t('no_account_register')} href="/register" center />
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
