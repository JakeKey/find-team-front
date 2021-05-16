import styled from 'styled-components';

import { colors } from 'styles';

export const Error = styled.div`
  min-height: 18px;
  font-size: 13px;
  color: ${colors.darkRed};
  font-weight: bold;

  &::first-letter {
    text-transform: uppercase;
  }
`;
