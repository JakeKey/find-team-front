import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import LoginForm, { LoginFormTypes } from 'containers/LoginForm';

import useTranslationPrefix from 'utils/useTranslationPrefix';

const Login: React.FC = () => {
  const t = useTranslationPrefix('General');

  const handleSubmit = (values: LoginFormTypes): void => {
    console.log(values);
  };

  return (
    <LoginForm handleSubmit={handleSubmit}>
      <div>{t('next')}</div>
    </LoginForm>
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

export default Login;
