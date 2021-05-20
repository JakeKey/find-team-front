import { memo, ReactNode } from 'react';
import Head from 'next/head';

import NavBar from 'components/NavBar';

import useTranslationPrefix from 'hooks/useTranslationPrefix';

import { Layout } from './styles';

type Props = {
  title: string;
  children: ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ title, children }) => {
  const t = useTranslationPrefix('General');

  return (
    <>
      <Head>
        <title>{t('page_title', { title })}</title>
      </Head>
      <Layout>
        <NavBar />
        {children}
      </Layout>
    </>
  );
};

export default memo(DashboardLayout);
