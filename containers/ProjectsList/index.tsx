import { memo, useCallback, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import ProjectCard from 'components/ProjectCard';
import Loader from 'components/Loader';

import useToastCustom from 'hooks/useToastCustom';
import { useAppDispatch, useAppSelector } from 'store';
import { getAllProjectsAction, unsetProjectsStatesAction } from 'store/actions';
import { projectsSelectors } from 'store/selectors';
import { PROJECTS_LIST_LIMIT } from 'utils/constants';

import { Wrapper, ScrollContent } from './styles';

const ProjectsList: React.FC = () => {
  const PAGE_START = -1;
  const { hasMore, isLoading, error, success, projects } = useAppSelector(
    projectsSelectors.selectProjectsState
  );
  const dispatch = useAppDispatch();
  useToastCustom({ unsetAction: unsetProjectsStatesAction, error, success });

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
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </ScrollContent>
      </InfiniteScroll>
    </Wrapper>
  );
};

export default memo(ProjectsList);
