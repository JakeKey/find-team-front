import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DashboardLayout from 'containers/DashboardLayout';
import Home from 'containers/Home';

import useTranslationPrefix from 'hooks/useTranslationPrefix';
import useAuth from 'hooks/useAuth';

const Dashboard: React.FC = () => {
  useAuth({ redirectToLogin: true });
  const t = useTranslationPrefix('Dashboard');

  return (
    <DashboardLayout title={t('dashboard')}>
      <Home />
    </DashboardLayout>
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

export default Dashboard;
