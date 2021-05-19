import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import AuthLayout from 'containers/AuthLayout';
import LinkButton from 'components/LinkButton';

import useTranslationPrefix from 'hooks/useTranslationPrefix';
import { useAppDispatch, useAppSelector } from 'store';
import { authSelectors } from 'store/selectors';
import { verifyAction } from 'store/actions';
import Loader from 'components/Loader';

const Verify: React.FC = () => {
  const t = useTranslationPrefix('Auth');
  const dispatch = useAppDispatch();
  const { error, success, isLoading } = useAppSelector(authSelectors.selectAuthState);
  const { query } = useRouter();

  const { executeRecaptcha } = useGoogleReCaptcha();

  const code = Array.isArray(query.code) ? query.code[0] : query.code;

  useEffect(() => {
    const verifyCodeHandler = async (): Promise<void> => {
      if (!executeRecaptcha || !code) return; // TODO handle error
      const token = await executeRecaptcha('code_verify');

      dispatch(
        verifyAction({
          code,
          reCaptchaResponse: token,
        })
      );
    };

    if (code) {
      verifyCodeHandler();
    }
  }, [code, executeRecaptcha, dispatch]);

  return (
    <AuthLayout title={t('verify_title')}>
      {isLoading ? (
        <Loader />
      ) : success ? (
        <>
          <div>{t('mail_verified')}</div> <br />
          <LinkButton text={t('log_in')} href="/login" />
        </>
      ) : (
        <div>{t('mail_verification_error')}</div>
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

export default Verify;
