import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DashboardLayout from 'containers/DashboardLayout';

import useTranslationPrefix from 'hooks/useTranslationPrefix';

const Project: React.FC = () => {
  const t = useTranslationPrefix('Dashboard');
  const router = useRouter();
  const { pid } = router.query;

  return (
    <DashboardLayout title={t('browse_projects')}>
      <div>{pid}</div>
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['/project/first-post', { params: { pid: 'second-post' } }],
    fallback: true,
  };
};

export default Project;
