import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DashboardLayout from 'containers/DashboardLayout';
import ProjectsList from 'containers/ProjectsList';

import useTranslationPrefix from 'hooks/useTranslationPrefix';
import useAuth from 'hooks/useAuth';

const Browse: React.FC = () => {
  useAuth({ redirectToLogin: true });
  const t = useTranslationPrefix('Dashboard');

  return (
    <DashboardLayout title={t('browse_projects')}>
      <ProjectsList />
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

export default Browse;
