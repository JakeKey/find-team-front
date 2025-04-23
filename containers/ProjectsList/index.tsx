import { memo, useCallback, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import ProjectCard from 'components/ProjectCard';
import Loader from 'components/Loader';

import useToastCustom from 'hooks/useToastCustom';
import { useAppDispatch, useAppSelector } from 'store';
import { getAllProjectsAction, unsetProjectsStatesAction } from 'store/actions';
import { projectsSelectors } from 'store/selectors';
import { PROJECTS_LIST_LIMIT } from 'utils/constants';

import { Wrapper, ScrollContent } from './styles';

const PAGE_START = 0;

const ProjectsList: React.FC = () => {
  const { hasMore, isLoading, error, success, projects } = useAppSelector(
    projectsSelectors.selectProjectsState,
  );
  const dispatch = useAppDispatch();
  useToastCustom({ unsetAction: unsetProjectsStatesAction, error, success });

  const loadMore = useCallback(() => {
    const page = Math.ceil(projects.length / PROJECTS_LIST_LIMIT);

    dispatch(getAllProjectsAction({ page, limit: PROJECTS_LIST_LIMIT }));
  }, [dispatch, projects.length]);

  useEffect(() => {
    dispatch && dispatch(getAllProjectsAction({ page: PAGE_START, limit: PROJECTS_LIST_LIMIT }));
  }, [dispatch]);

  return (
    <Wrapper>
      <InfiniteScroll
        next={loadMore}
        dataLength={projects.length}
        hasMore={!error && !isLoading && hasMore}
        loader={<Loader key={0} />}
        scrollThreshold="100px"
        scrollableTarget={Wrapper}
        style={{ overflow: 'hidden' }}
      >
        <ScrollContent>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </ScrollContent>
      </InfiniteScroll>
    </Wrapper>
  );
};

export default memo(ProjectsList);
