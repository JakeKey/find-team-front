import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { toast } from 'react-toastify';

import AuthLayout from 'containers/AuthLayout';
import LinkButton from 'components/LinkButton';
import Loader from 'components/Loader';

import useAuth from 'hooks/useAuth';
import useToastCustom from 'hooks/useToastCustom';
import useTranslationPrefix from 'hooks/useTranslationPrefix';
import { useAppDispatch, useAppSelector } from 'store';
import { verifyAction, unsetAuthStatesAction } from 'store/actions';
import { authSelectors } from 'store/selectors';
import { ErrorCodes } from 'types/enums';

const Verify: React.FC = () => {
  useAuth({ redirectToDashboard: true });
  const t = useTranslationPrefix('Auth');
  const tc = useTranslationPrefix('Codes');
  const dispatch = useAppDispatch();
  const { error, success, isLoading } = useAppSelector(authSelectors.selectAuthState);
  const [callRequested, setCallRequested] = useState(false);
  const { query } = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();
  useToastCustom({ unsetAction: unsetAuthStatesAction, error, success });

  const code = Array.isArray(query.code) ? query.code[0] : query.code;

  useEffect(() => {
    const verifyCodeHandler = async (): Promise<void> => {
      if (!executeRecaptcha || !code) {
        toast.error(tc(ErrorCodes.SOMETHING_WENT_WRONG));
        return;
      }
      const token = await executeRecaptcha('code_verify');

      setCallRequested(true);

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
  }, [code, executeRecaptcha, dispatch, tc]);

  return (
    <AuthLayout title={t('verify_title')}>
      {isLoading ? (
        <Loader />
      ) : callRequested && success ? (
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
