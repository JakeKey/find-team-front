import { memo, useState } from 'react';
import { FormikErrors, FormikState, FormikTouched } from 'formik';

import Button from 'components/Button';

import useTranslationPrefix from 'hooks/useTranslationPrefix';
import { PositionType, ProjectType } from 'types/interfaces';
import { ProjectFormTypes } from 'pages/new-project';

import Title from './elements/Title';
import Description from './elements/Description';
import Positions from './elements/Positions';
import { Main, EditContainer, EditIcon, EditSection, ButtonsContainer, Author } from './styles';

export interface ProjectProps {
  isNewProject?: boolean;
  isEditable?: boolean;
  resetForm?: (nextState?: Partial<FormikState<ProjectType>> | undefined) => void;
  submitForm?: () => Promise<void>;
  values: ProjectFormTypes;
  setPositions?: (positions: PositionType[]) => void;
  username?: string;
  disabled?: boolean;
  errors?: FormikErrors<ProjectFormTypes>;
  touched?: FormikTouched<ProjectFormTypes>;
}

const ProjectDetails: React.FC<ProjectProps> = ({
  isEditable,
  resetForm,
  submitForm,
  values,
  setPositions,
  isNewProject,
  username,
  disabled,
  errors,
  touched,
}) => {
  const t = useTranslationPrefix('Projects');
  const tg = useTranslationPrefix('General');
  const [isEditMode, setIsEditMode] = useState(!!isNewProject);
  const { name, description, positions } = values;

  const cancelEdit = (): void => {
    if (resetForm) resetForm();
    setIsEditMode(false);
  };

  const saveEdit = (): void => {
    if (submitForm) submitForm();
    if (!isNewProject) setIsEditMode(false);
  };

  return (
    <Main>
      <EditSection>
        {(isEditable || isNewProject) &&
          (!isEditMode ? (
            <EditContainer onClick={() => setIsEditMode(true)}>
              {t('edit')} <EditIcon type="edit" />
            </EditContainer>
          ) : (
            <ButtonsContainer>
              {!isNewProject && <Button text={tg('cancel')} onClick={cancelEdit} />}
              <Button text={tg('save')} disabled={disabled} onClick={saveEdit} />
            </ButtonsContainer>
          ))}
      </EditSection>
      <Title name={name} error={touched?.name && errors?.name} isEditMode={isEditMode} />
      <Author>{t('author', { author: username })}</Author>
      <Description
        name="description"
        description={description}
        error={touched?.description && errors?.description}
        isEditMode={isEditMode}
      />
      <Positions isEditMode={isEditMode} setPositions={setPositions} positions={positions} />
    </Main>
  );
};

export default memo(ProjectDetails);
