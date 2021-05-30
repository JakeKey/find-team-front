import { memo } from 'react';

import InputText from 'components/InputText';

import useTranslationPrefix from 'hooks/useTranslationPrefix';

import { DescriptionWrapper } from './styles';

interface Props {
  description?: string;
  name: string;
  isEditMode: boolean;
}

const Description: React.FC<Props> = ({ name, description, isEditMode }) => {
  const t = useTranslationPrefix('Projects');
  return (
    <DescriptionWrapper>
      <div>{t('description')}</div>
      {!isEditMode ? (
        <div>{description}</div>
      ) : (
        <InputText is="textarea" name={name} placeholder={t('description_placeholder')} />
      )}
    </DescriptionWrapper>
  );
};

export default memo(Description);
