import styled, { css } from 'styled-components';

import { colors } from 'styles';

export const Label = styled.div<{ dark?: boolean }>`
  padding: 0 5px;
  font-size: 12px;
  font-weight: bold;
  text-transform: capitalize;
  font-style: italic;
  text-align: start;

  ${({ dark }) =>
    dark &&
    css`
      color: ${colors.black};
    `}
`;
