import { useCallback } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Form, Formik } from 'formik';

import DashboardLayout from 'containers/DashboardLayout';
import ProjectDetails from 'containers/ProjectDetails';

import useTranslationPrefix from 'hooks/useTranslationPrefix';
import useAuth from 'hooks/useAuth';
import { PositionType, ProjectType } from 'types/interfaces/project';

const NewProject: React.FC = () => {
  useAuth();
  const t = useTranslationPrefix('Projects');

  const handleSubmit = useCallback(async (values: ProjectType): Promise<void> => {
    console.log(values);
  }, []);

  const initialValues: ProjectType = {
    name: t('new_project'),
    author: 'Test user',
    positions: [],
    description: '',
  };

  return (
    <DashboardLayout title={t('create_project')}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, resetForm, submitForm, setFieldValue }) => (
          <Form>
            <ProjectDetails
              values={{ ...values }}
              isEditable
              resetForm={resetForm}
              submitForm={submitForm}
              setPositions={(positions: PositionType) => setFieldValue('positions', positions)}
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
