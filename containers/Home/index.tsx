import { memo } from 'react';

import useTranslationPrefix from 'hooks/useTranslationPrefix';

import { Wrapper } from './styles';

const Home: React.FC = () => {
  const t = useTranslationPrefix('Dashboard');

  return <Wrapper>{t('create_new_project_or_browse')}</Wrapper>;
};

export default memo(Home);
