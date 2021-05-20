import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DashboardLayout from 'containers/DashboardLayout';

import useTranslationPrefix from 'hooks/useTranslationPrefix';
import useAuth from 'hooks/useAuth';

const NewProject: React.FC = () => {
  useAuth();
  const t = useTranslationPrefix('Dashboard');

  return (
    <DashboardLayout title={t('dashboard')}>
      <div>NewProject</div>
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

export default NewProject;
