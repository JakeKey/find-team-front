import styled, { css } from 'styled-components';

import { colors } from 'styles';

export const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 10px;
  margin: 20px 0;
  min-width: 150px;
  background-color: ${colors.orange};
  color: ${colors.darkBlue};
  font-weight: bold;
  border-radius: 10px;
  border: none;
  box-sizing: border-box;
  border: 2px transparent solid;

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: ${colors.darkGray};
          color: ${colors.lightGray};
          cursor: not-allowed;
        `
      : css`
          border-color: ${colors.black};
          &:hover {
            opacity: 0.8;
            transition: opacity 0.2s;
          }
        `};
`;
