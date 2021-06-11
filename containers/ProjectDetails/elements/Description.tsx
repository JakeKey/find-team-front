import { memo } from 'react';

import InputText from 'components/InputText';

import useTranslationPrefix from 'hooks/useTranslationPrefix';

import { DescriptionWrapper } from './styles';
import InputLabel from 'components/InputLabel';

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
      <InputLabel label={t('description')} />
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
