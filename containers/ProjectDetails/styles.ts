import styled from 'styled-components';

import Icon from 'components/Icon';

import { breakpoints } from 'styles';

export const Main = styled.main`
  display: grid;
  padding: 20px;
  grid:
    'edit edit' 80px 'title title' minmax(90px, auto) 'author author' 50px
    'desc positions' minmax(100px, auto) / 1fr 1fr;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${breakpoints.md.max}px) {
    grid:
      'edit' 80px 'title' minmax(90px, auto) 'author' 50px
      'desc' minmax(100px, auto) 'positions' minmax(100px, auto) / 1fr;
  }
`;

export const EditSection = styled.section`
  grid-area: edit;
  justify-self: right;
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
