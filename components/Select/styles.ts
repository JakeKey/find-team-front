import { Field } from 'formik';
import styled, { css } from 'styled-components';

import { colors } from 'styles';

export const Wrapper = styled.div`
  width: 100%;
`;

const selectStyled = css`
  width: 100%;
  color: ${colors.darkBlue};
  background-color: ${colors.lightGray};
  font-weight: bold;
  border: 2px solid ${colors.black};
  border-radius: 5px;
  padding: 7px;
`;

export const StyledSelect = styled.select`
  ${selectStyled}
`;

export const StyledSelectField = styled(Field)`
  ${selectStyled}
`;
