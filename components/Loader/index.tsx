import useTranslationPrefix from 'hooks/useTranslationPrefix';
import { memo } from 'react';

import { Wrapper } from './styles';

const Loader: React.FC = () => {
  const t = useTranslationPrefix('General');
  return <Wrapper>{t('loading')}</Wrapper>;
};

export default memo(Loader);
