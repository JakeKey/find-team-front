import { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Formik } from 'formik';

import DashboardLayout from 'containers/DashboardLayout';
import ProjectDetails from 'containers/ProjectDetails';

import useTranslationPrefix from 'hooks/useTranslationPrefix';
import useAuth from 'hooks/useAuth';
import { useAppDispatch, useAppSelector } from 'store';
import { projectsSelectors } from 'store/selectors';
import { getProjectAction } from 'store/actions';
import { ProjectFormTypes } from 'types/interfaces';
import Loader from 'components/Loader';

const Project: React.FC = () => {
  useAuth({});

  const t = useTranslationPrefix('Dashboard');

  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(projectsSelectors.selectProjectsState);
  const project = useAppSelector(projectsSelectors.selectProjectDetails);

  const { query, push } = useRouter();
  const { pid } = query;

  const isProperProjectLoaded = !!project && Number(project.id) === Number(pid);

  useEffect(() => {
    if (!pid) {
      push('/');
      return;
    }
    if (!isProperProjectLoaded) {
      const id = Array.isArray(pid) ? pid[0] : pid;
      dispatch(getProjectAction(id));
    }
  }, [pid, push, project, dispatch, isProperProjectLoaded]);

  const handleSubmit = (values: ProjectFormTypes): void => {
    // TODO Project update handler
  };

  const initialValues: ProjectFormTypes = {
    name: project?.name || '',
    description: project?.description || '',
    positions: project?.positions,
  };

  return (
    <DashboardLayout title={t('browse_projects')}>
      {isProperProjectLoaded ? (
        <Formik initialValues={initialValues} enableReinitialize onSubmit={handleSubmit}>
          {({ values }) => <ProjectDetails values={values} username={project?.authorname} />}
        </Formik>
      ) : isLoading ? (
        <Loader />
      ) : (
        <div>Something went wrong</div>
      )}
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
