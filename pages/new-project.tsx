import { useCallback, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Form, Formik } from 'formik';

import DashboardLayout from 'containers/DashboardLayout';
import ProjectDetails from 'containers/ProjectDetails';

import { validateCreateProject } from 'utils/validation/projects';
import useTranslationPrefix from 'hooks/useTranslationPrefix';
import useAuth from 'hooks/useAuth';
import { PositionType, ProjectType } from 'types/interfaces';
import { useAppDispatch, useAppSelector } from 'store';
import { createProjectAction } from 'store/actions';
import { projectsSelectors } from 'store/selectors';

export type ProjectFormTypes = Pick<ProjectType, 'name' | 'description' | 'positions'>;

const NewProject: React.FC = () => {
  useAuth();
  const t = useTranslationPrefix('Projects');
  const dispatch = useAppDispatch();
  const { error, success, isLoading } = useAppSelector(projectsSelectors.selectProjectsState);

  useEffect(() => {
    if (error) {
      // TODO display error toast
    }
  }, [error]);

  const handleSubmit = useCallback(
    (values: ProjectFormTypes): void => {
      if (isLoading) return;
      dispatch(createProjectAction(values));
    },
    [dispatch, isLoading]
  );

  const initialValues: ProjectFormTypes = {
    name: t('new_project'),
    positions: [],
    description: '',
  };

  return (
    <DashboardLayout title={t('create_project')}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validateCreateProject}
      >
        {({
          values,
          errors,
          touched,
          resetForm,
          submitForm,
          setFieldValue,
          isValid,
          isSubmitting,
          dirty,
        }) => (
          <Form>
            <ProjectDetails
              values={{ ...values }}
              errors={{ ...errors }}
              touched={{ ...touched }}
              isNewProject
              resetForm={resetForm}
              submitForm={submitForm}
              setPositions={(positions: PositionType[]) => setFieldValue('positions', positions)}
              disabled={isSubmitting || !isValid || !dirty}
            />
          </Form>
        )}
      </Formik>
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
