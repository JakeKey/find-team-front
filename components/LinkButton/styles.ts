import styled, { css } from 'styled-components';

import { colors } from 'styles';

export const Wrapper = styled.div<{ $center?: boolean }>`
  padding: 5px 0;
  color: ${colors.darkBlue};
  ${({ $center }) =>
    $center &&
    css`
      text-align: center;
    `}

  & a {
    font-weight: bold;
    text-decoration: none;
  }
`;
