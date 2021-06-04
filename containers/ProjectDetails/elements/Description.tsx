import { memo } from 'react';

import InputText from 'components/InputText';

import useTranslationPrefix from 'hooks/useTranslationPrefix';

import { DescriptionWrapper } from './styles';

interface Props {
  description?: string;
  name: string;
  isEditMode: boolean;
  error?: string | false;
}

const Description: React.FC<Props> = ({ name, description, isEditMode, error }) => {
  const t = useTranslationPrefix('Projects');
  return (
    <DescriptionWrapper>
      <div>{t('description')}</div>
      {!isEditMode ? (
        <div>{description}</div>
      ) : (
        <InputText
          is="textarea"
          name={name}
          placeholder={t('description_placeholder')}
          error={error}
        />
      )}
    </DescriptionWrapper>
  );
};

export default memo(Description);
