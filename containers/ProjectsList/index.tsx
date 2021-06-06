import { memo, useCallback, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import ProjectCard from 'components/ProjectCard';
import Loader from 'components/Loader';

import { useAppDispatch, useAppSelector } from 'store';
import { getAllProjectsAction } from 'store/actions';
import { projectsSelectors } from 'store/selectors';
import { PROJECTS_LIST_LIMIT } from 'utils/constants';

import { Wrapper, ScrollContent } from './styles';

interface Props {
  projects?: [];
}

const ProjectsList: React.FC<Props> = () => {
  const PAGE_START = -1;
  const projectsList = useAppSelector(projectsSelectors.selectProjectsList);
  const { hasMore, isLoading, error } = useAppSelector(projectsSelectors.selectProjectsState);
  const dispatch = useAppDispatch();

  const scrollParentRef = useRef(null);

  const loadMore = useCallback(
    (page) => {
      dispatch(getAllProjectsAction({ page, limit: PROJECTS_LIST_LIMIT }));
    },
    [dispatch]
  );

  return (
    <Wrapper ref={scrollParentRef}>
      <InfiniteScroll
        pageStart={PAGE_START}
        loadMore={loadMore}
        hasMore={!error && !isLoading && hasMore}
        getScrollParent={() => scrollParentRef.current}
        threshold={100}
        loader={<Loader key={0} />}
      >
        <ScrollContent>
          {projectsList.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </ScrollContent>
      </InfiniteScroll>
    </Wrapper>
  );
};

export default memo(ProjectsList);
