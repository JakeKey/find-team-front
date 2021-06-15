import { useCallback, useRef, useState } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { toast } from 'react-toastify';
import { ReCaptcha } from 'react-recaptcha-v3';

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
import { RECAPTCHA_SITE_KEY } from 'utils/api';

const Login: React.FC = () => {
  useAuth({ redirectToDashboard: true });
  const t = useTranslationPrefix('Auth');
  const tc = useTranslationPrefix('Codes');
  const dispatch = useAppDispatch();
  const { error, success, isLoading } = useAppSelector(authSelectors.selectAuthState);
  useToastCustom({ unsetAction: unsetAuthStatesAction, error, success });
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const recaptchaRef = useRef<ReCaptcha>();

  const handleSubmit = useCallback(
    async (values: LoginFormTypes): Promise<void> => {
      if (!recaptchaToken) {
        recaptchaRef.current?.execute();
        toast.error(tc(ErrorCodes.INVALID_CAPTCHA));
        return;
      }
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
          reCaptchaResponse: recaptchaToken,
        })
      );

      recaptchaRef.current?.execute();
    },
    [recaptchaToken, dispatch, isLoading, tc, recaptchaRef]
  );

  return (
    <AuthLayout title={t('log_in')}>
      <ReCaptcha
        ref={(ref) => ref && (recaptchaRef.current = ref)}
        action="login"
        verifyCallback={(token: string) => setRecaptchaToken(token)}
        sitekey={RECAPTCHA_SITE_KEY}
      />
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
