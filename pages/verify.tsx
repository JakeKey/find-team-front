import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { ReCaptcha } from 'react-recaptcha-v3';

import AuthLayout from 'containers/AuthLayout';
import LinkButton from 'components/LinkButton';
import Loader from 'components/Loader';

import useRequestState from 'hooks/useRequestState';
import useToastCustom from 'hooks/useToastCustom';
import useTranslationPrefix from 'hooks/useTranslationPrefix';
import { useAppDispatch, useAppSelector } from 'store';
import { verifyAction, unsetAuthStatesAction } from 'store/actions';
import { authSelectors } from 'store/selectors';
import { ErrorCodes } from 'types/enums';
import { RECAPTCHA_SITE_KEY } from 'utils/api';

const Verify: React.FC = () => {
  const t = useTranslationPrefix('Auth');
  const tc = useTranslationPrefix('Codes');
  const dispatch = useAppDispatch();
  const { error, success, isLoading } = useAppSelector(authSelectors.selectAuthState);
  const [callRequested, setCallRequested] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const { query } = useRouter();
  useToastCustom({ unsetAction: unsetAuthStatesAction, error, success });
  const { showSuccess, showError } = useRequestState({ callRequested, error, success });

  const code = Array.isArray(query.code) ? query.code[0] : query.code;

  useEffect(() => {
    const verifyCodeHandler = async (): Promise<void> => {
      if (!recaptchaToken || !code) {
        toast.error(tc(ErrorCodes.SOMETHING_WENT_WRONG));
        return;
      }

      setCallRequested(true);

      dispatch(
        verifyAction({
          code,
          reCaptchaResponse: recaptchaToken,
        })
      );
    };

    if (code && recaptchaToken && !callRequested) {
      verifyCodeHandler();
    }
  }, [code, recaptchaToken, dispatch, tc, callRequested]);

  return (
    <AuthLayout title={t('verify_title')}>
      <ReCaptcha
        action="code_verify"
        verifyCallback={(token: string) => setRecaptchaToken(token)}
        sitekey={RECAPTCHA_SITE_KEY}
      />
      {isLoading ? (
        <Loader />
      ) : showSuccess ? (
        <>
          <div>{t('mail_verified')}</div> <br />
          <LinkButton text={t('log_in')} href="/login" />
        </>
      ) : showError ? (
        <div>{t('mail_verification_error')}</div>
      ) : (
        <div>{t('verify_title')}</div>
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
