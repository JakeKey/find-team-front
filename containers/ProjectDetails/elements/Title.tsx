import { memo } from 'react';

import InputText from 'components/InputText';

import { ProjectType } from 'types/interfaces/project';

import { StyledTitle, TitleWrapper, TitleInputContainer } from './styles';
import useTranslationPrefix from 'hooks/useTranslationPrefix';

type Props = Pick<ProjectType, 'name'> & { isEditMode: boolean };

const Title: React.FC<Props> = ({ name, isEditMode }) => {
  const t = useTranslationPrefix('Projects');

  return (
    <TitleWrapper>
      {isEditMode ? (
        <TitleInputContainer>
          <InputText type="text" name="name" label={t('project_name')} />
        </TitleInputContainer>
      ) : (
        <StyledTitle>{name}</StyledTitle>
      )}
    </TitleWrapper>
  );
};

export default memo(Title);
