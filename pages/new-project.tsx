import { useCallback, useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Form, Formik } from 'formik';

import DashboardLayout from 'containers/DashboardLayout';
import ProjectDetails from 'containers/ProjectDetails';

import { validateCreateProject } from 'utils/validation';
import { PROJECT_ROUTE } from 'utils/constants';
import useTranslationPrefix from 'hooks/useTranslationPrefix';
import useAuth from 'hooks/useAuth';
import { PositionType, ProjectFormTypes } from 'types/interfaces';
import { useAppDispatch, useAppSelector } from 'store';
import { createProjectAction } from 'store/actions';
import { profileSelectors, projectsSelectors } from 'store/selectors';

const NewProject: React.FC = () => {
  useAuth({ redirectToLogin: true });

  const t = useTranslationPrefix('Projects');

  const { push } = useRouter();

  const dispatch = useAppDispatch();
  const { error, isLoading, createdProjectId } = useAppSelector(
    projectsSelectors.selectProjectsState
  );
  const profile = useAppSelector(profileSelectors.selectProfile);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    if (error) {
      // TODO display error toast
    }
  }, [error]);

  useEffect(() => {
    if (isFormSubmitted && createdProjectId) {
      push(`${PROJECT_ROUTE}/${createdProjectId}`);
    }
  }, [isFormSubmitted, createdProjectId, push]);

  const handleSubmit = useCallback(
    (values: ProjectFormTypes): void => {
      if (isLoading) return;
      dispatch(createProjectAction(values));
      setIsFormSubmitted(true);
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
              username={profile?.username || ''}
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
