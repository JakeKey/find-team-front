import styled, { css } from 'styled-components';

import { colors } from 'styles';

export const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 10px;
  margin: 20px 0;
  min-width: 150px;
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  font-weight: bold;
  border: 1px transparent solid;
  border-radius: 10px;

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: ${colors.darkGray};
          cursor: not-allowed;
        `
      : css`
          &:hover {
            opacity: 0.8;
            transition: opacity 0.2s;
          }
        `};
`;
