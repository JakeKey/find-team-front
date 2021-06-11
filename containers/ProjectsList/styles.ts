import styled from 'styled-components';

import { PROJECT_CARD_SIZE_PX } from 'components/ProjectCard/styles';

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 20px;
  box-sizing: border-box;
`;

export const ScrollContent = styled.div`
  display: grid;
  justify-content: center;
  grid: ${PROJECT_CARD_SIZE_PX}px / repeat(auto-fit, ${PROJECT_CARD_SIZE_PX}px);
  grid-gap: 50px;
`;
