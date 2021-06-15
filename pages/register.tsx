import { useCallback, useRef, useState } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { toast } from 'react-toastify';
import { ReCaptcha } from 'react-recaptcha-v3';

import AuthLayout from 'containers/AuthLayout';
import RegisterForm, { RegisterFormTypes } from 'containers/RegisterForm';
import LinkButton from 'components/LinkButton';

import useAuth from 'hooks/useAuth';
import useToastCustom from 'hooks/useToastCustom';
import useRequestState from 'hooks/useRequestState';
import useTranslationPrefix from 'hooks/useTranslationPrefix';
import { useAppDispatch, useAppSelector } from 'store';
import { registerAction, unsetAuthStatesAction } from 'store/actions';
import { authSelectors } from 'store/selectors';
import { ErrorCodes } from 'types/enums';
import { RECAPTCHA_SITE_KEY } from 'utils/api';

const Register: React.FC = () => {
  useAuth({ redirectToDashboard: true });
  const t = useTranslationPrefix('Auth');
  const tc = useTranslationPrefix('Codes');
  const dispatch = useAppDispatch();
  const { error, success, isLoading } = useAppSelector(authSelectors.selectAuthState);
  const [callRequested, setCallRequested] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  useToastCustom({ unsetAction: unsetAuthStatesAction, error, success });
  const { showSuccess } = useRequestState({ callRequested, error, success });

  const recaptchaRef = useRef<ReCaptcha>();

  const handleSubmit = useCallback(
    async (values: RegisterFormTypes): Promise<void> => {
      if (!recaptchaToken) {
        recaptchaRef.current?.execute();
        toast.error(tc(ErrorCodes.INVALID_CAPTCHA));
        return;
      }
      if (isLoading) {
        toast.error(tc(ErrorCodes.SOMETHING_WENT_WRONG));
        return;
      }
      const { username, password, email, position } = values;

      setCallRequested(true);

      dispatch(
        registerAction({
          username,
          password,
          email,
          position: position || undefined,
          reCaptchaResponse: recaptchaToken,
        })
      );

      recaptchaRef.current?.execute();
    },
    [recaptchaToken, dispatch, isLoading, tc, recaptchaRef]
  );

  return (
    <AuthLayout title={t('register')}>
      <ReCaptcha
        ref={(ref) => ref && (recaptchaRef.current = ref)}
        action="register"
        verifyCallback={(token: string) => setRecaptchaToken(token)}
        sitekey={RECAPTCHA_SITE_KEY}
      />
      {showSuccess ? (
        <div>{t('register_success')}</div>
      ) : (
        <>
          <RegisterForm handleSubmit={handleSubmit} />
          <LinkButton text={t('already_registered')} href="/login" center />
        </>
      )}
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
