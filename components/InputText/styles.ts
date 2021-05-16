import { Field } from 'formik';
import styled, { css } from 'styled-components';
import InputMask from 'react-input-mask';

import { colors } from 'styles';

export const Wrapper = styled.div`
  padding: 5px 0;
`;

const inputStyle = css`
  width: 350px;
  color: ${colors.darkBlue};
  background-color: ${colors.lightGray};
  font-weight: bold;
  border: 2px solid ${colors.black};
  border-radius: 5px;
  padding: 7px;
`;

export const StyledField = styled(Field)`
  ${inputStyle}
`;

export const StyledMask = styled(InputMask)`
  ${inputStyle}
`;
