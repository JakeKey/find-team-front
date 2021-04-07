import { memo, ReactNode } from 'react';
import Head from 'next/head';

import useTranslationPrefix from 'utils/useTranslationPrefix';

import { FormContainer, Header } from './styles';

type Props = {
  title: string;
  children: ReactNode;
};

export type AuthLayoutTypes = {
  username: string;
  password: string;
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
      </FormContainer>
    </>
  );
};

export default memo(AuthLayout);
