import styled from 'styled-components';

import { colors } from 'styles';

export const PROJECT_CARD_SIZE_PX = 300;

export const Wrapper = styled.div`
  display: block;
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${colors.darkGray};
  height: ${PROJECT_CARD_SIZE_PX}px;
  border: ${colors.black} solid 4px;
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;
  white-space: pre-wrap;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
  }
`;

export const ProjectName = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

export const Author = styled.div`
  text-align: end;
  padding: 10px 0;
`;
