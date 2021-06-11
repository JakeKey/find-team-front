import { memo } from 'react';

import InputText from 'components/InputText';

import { ProjectType } from 'types/interfaces';
import useTranslationPrefix from 'hooks/useTranslationPrefix';

import { StyledTitle, TitleWrapper, TitleInputContainer } from './styles';

type Props = Pick<ProjectType, 'name'> & { isEditMode: boolean; error?: string | false };

const Title: React.FC<Props> = ({ name, isEditMode, error }) => {
  const t = useTranslationPrefix('Projects');

  return (
    <TitleWrapper>
      {isEditMode ? (
        <TitleInputContainer>
          <InputText
            type="text"
            name="name"
            error={error}
            label={t('project_name')}
            placeholder={t('project_name')}
            darkLabel={false}
          />
        </TitleInputContainer>
      ) : (
        <StyledTitle>{name}</StyledTitle>
      )}
    </TitleWrapper>
  );
};

export default memo(Title);
