import { memo, ReactNode } from 'react';
import Head from 'next/head';

import useTranslationPrefix from 'hooks/useTranslationPrefix';

import { FormContainer, Header, CaptchaDisclaimer } from './styles';

type Props = {
  title: string;
  children: ReactNode;
};

const AuthLayout: React.FC<Props> = ({ title, children }) => {
  const t = useTranslationPrefix('General');

  return (
    <>
      <Head>
        <title>{t('page_title', { title })}</title>
      </Head>
      <FormContainer>
        <Header>{title}</Header>
        {children}
        <CaptchaDisclaimer>
          This site is protected by reCAPTCHA and the Google{' '}
          <a href="https://policies.google.com/privacy">Privacy Policy</a> and{' '}
          <a href="https://policies.google.com/terms">Terms of Service</a> apply.
        </CaptchaDisclaimer>
      </FormContainer>
    </>
  );
};

export default memo(AuthLayout);
