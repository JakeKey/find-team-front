import { memo } from 'react';
import { useRouter } from 'next/router';

import { GetAllProjectsResponseData } from 'types/interfaces';
import useTranslationPrefix from 'hooks/useTranslationPrefix';

import { Wrapper, ProjectName } from './styles';

const ProjectCard: React.FC<GetAllProjectsResponseData> = ({
  name,
  description,
  authorname,
  id,
}) => {
  const t = useTranslationPrefix('Projects');
  const { push } = useRouter();

  const goToProject = (): void => {
    push(`/project/${id}`);
  };

  return (
    <Wrapper onClick={() => goToProject()}>
      <ProjectName>{name}</ProjectName>
      <div style={{ textAlign: 'end' }}>{t('author', { author: authorname })}</div>
      <div>{description}</div>
    </Wrapper>
  );
};

export default memo(ProjectCard);
