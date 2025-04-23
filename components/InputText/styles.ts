import { Field } from 'formik';
import styled, { css } from 'styled-components';
import { InputMask } from '@react-input/mask';

import { colors } from 'styles';

export const Wrapper = styled.div`
  width: 100%;
`;

const inputStyle = css`
  width: 100%;
  box-sizing: border-box;
  padding: 7px;
  color: ${colors.darkBlue};
  background-color: ${colors.lightGray};
  font-weight: bold;
  border: 2px solid ${colors.black};
  border-radius: 5px;
`;

export const StyledField = styled(Field)`
  ${inputStyle}

  margin: auto;
  ${({ component }) =>
    component === 'textarea' &&
    css`
      font-size: 14px;
      resize: none;
    `}
`;

export const StyledMask = styled(InputMask)`
  ${inputStyle}
`;
