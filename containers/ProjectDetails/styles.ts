import styled from 'styled-components';

import Icon from 'components/Icon';

import { breakpoints } from 'styles';

export const Main = styled.main`
  display: grid;
  padding: 0 20px 40px;
  grid:
    'edit edit' 80px 'title title' minmax(90px, auto) 'author author' 50px
    'desc positions' minmax(100px, auto) / 1fr 1fr;
  justify-content: center;
  align-items: center;
  grid-row-gap: 40px;

  @media screen and (max-width: ${breakpoints.md.max}px) {
    grid:
      'edit' 50px 'title' auto 'author' auto
      'desc' minmax(100px, auto) 'positions' minmax(100px, auto) / 1fr;
  }
`;

export const EditSection = styled.section`
  grid-area: edit;
  justify-self: right;
  align-self: flex-start;
`;

export const EditContainer = styled.div`
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;

export const EditIcon = styled(Icon)`
  padding-left: 5px;
`;

export const ButtonsContainer = styled.div``;

export const Author = styled.section`
  grid-area: author;
  justify-self: right;
  font-size: 20px;
`;
