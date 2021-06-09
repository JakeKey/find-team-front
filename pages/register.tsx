import { useCallback, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import AuthLayout from 'containers/AuthLayout';
import RegisterForm, { RegisterFormTypes } from 'containers/RegisterForm';
import LinkButton from 'components/LinkButton';

import useTranslationPrefix from 'hooks/useTranslationPrefix';
import { useAppDispatch, useAppSelector } from 'store';
import { registerAction } from 'store/actions';
import { authSelectors } from 'store/selectors';
import useAuth from 'hooks/useAuth';

const Register: React.FC = () => {
  useAuth({ redirectToDashboard: true });
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
    async (values: RegisterFormTypes): Promise<void> => {
      if (!executeRecaptcha || isLoading) return; // TODO handle error
      const { username, password, email, position } = values;
      const token = await executeRecaptcha('register');

      dispatch(
        registerAction({
          username,
          password,
          email,
          position: position || undefined,
          reCaptchaResponse: token,
        })
      );
    },
    [executeRecaptcha, dispatch, isLoading]
  );

  return (
    <AuthLayout title={t('register')}>
      {success ? (
        <div>{t('register_success')}</div>
      ) : (
        <>
          <RegisterForm handleSubmit={handleSubmit} />
          <LinkButton text={t('already_registered')} href="/login" />
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
