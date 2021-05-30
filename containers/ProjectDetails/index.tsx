import { memo, useState } from 'react';
import { FormikState } from 'formik';

import Button from 'components/Button';

import useTranslationPrefix from 'hooks/useTranslationPrefix';
import { PositionType, ProjectType } from 'types/interfaces/project';

import Title from './elements/Title';
import Description from './elements/Description';
import Positions from './elements/Positions';
import { Main, EditContainer, EditIcon, EditSection, ButtonsContainer, Author } from './styles';

export interface ProjectProps {
  isEditable?: boolean;
  resetForm?: (nextState?: Partial<FormikState<ProjectType>> | undefined) => void;
  submitForm?: () => Promise<void>;
  values: ProjectType;
  setPositions?: (positions: PositionType) => void;
}

const ProjectDetails: React.FC<ProjectProps> = ({
  isEditable,
  resetForm,
  submitForm,
  values,
  setPositions,
}) => {
  const t = useTranslationPrefix('Projects');
  const [isEditMode, setIsEditMode] = useState(false);
  const { name, author, description, positions } = values;

  const cancelEdit = (): void => {
    if (resetForm) resetForm();
    setIsEditMode(false);
  };

  const saveEdit = (): void => {
    if (submitForm) submitForm();
    setIsEditMode(false);
  };

  return (
    <Main>
      <EditSection>
        {isEditable &&
          (!isEditMode ? (
            <EditContainer onClick={() => setIsEditMode(true)}>
              {t('edit')} <EditIcon type="edit" />
            </EditContainer>
          ) : (
            <ButtonsContainer>
              <Button text="anuluj" onClick={cancelEdit} />
              <Button text="Zapisz" onClick={saveEdit} />
            </ButtonsContainer>
          ))}
      </EditSection>
      <Title name={name} isEditMode={isEditMode} />
      <Author>{t('author', { author })}</Author>
      <Description name="description" description={description} isEditMode={isEditMode} />
      <Positions isEditMode={isEditMode} setPositions={setPositions} positions={positions} />
    </Main>
  );
};

export default memo(ProjectDetails);
