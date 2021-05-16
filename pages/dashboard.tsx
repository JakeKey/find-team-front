import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DashboardLayout from 'containers/DashboardLayout';

import useTranslationPrefix from 'hooks/useTranslationPrefix';
import useAuth from 'hooks/useAuth';

const Dashboard: React.FC = () => {
  useAuth();
  const t = useTranslationPrefix('Dashboard');

  return (
    <DashboardLayout title={t('dashboard')}>
      <div>Dashboard</div>
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
