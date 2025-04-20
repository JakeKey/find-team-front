import { useCallback, useState } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { toast } from 'react-toastify';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

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

const Register: React.FC = () => {
  useAuth({ redirectToDashboard: true });
  const t = useTranslationPrefix('Auth');
  const tc = useTranslationPrefix('Codes');
  const dispatch = useAppDispatch();
  const { error, success, isLoading } = useAppSelector(authSelectors.selectAuthState);
  const [callRequested, setCallRequested] = useState(false);
  useToastCustom({ unsetAction: unsetAuthStatesAction, error, success });
  const { showSuccess } = useRequestState({ callRequested, error, success });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = useCallback(
    async (values: RegisterFormTypes): Promise<void> => {
      if (!executeRecaptcha) {
        toast.error(tc(ErrorCodes.INVALID_CAPTCHA));
        return;
      }
      if (isLoading) {
        toast.error(tc(ErrorCodes.SOMETHING_WENT_WRONG));
        return;
      }
      const { username, password, email, position } = values;
      const token = await executeRecaptcha('register');

      setCallRequested(true);

      dispatch(
        registerAction({
          username,
          password,
          email,
          position: position || undefined,
          reCaptchaResponse: token,
        }),
      );
    },
    [dispatch, isLoading, tc, executeRecaptcha],
  );

  return (
    <AuthLayout title={t('register')}>
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
