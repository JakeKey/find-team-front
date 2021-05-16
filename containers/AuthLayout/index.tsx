import { memo, ReactNode } from 'react';
import Head from 'next/head';

import useTranslationPrefix from 'hooks/useTranslationPrefix';

import { FormContainer, Header } from './styles';

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
      </FormContainer>
    </>
  );
};

export default memo(AuthLayout);
