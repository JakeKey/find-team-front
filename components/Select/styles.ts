import { Field } from 'formik';
import styled from 'styled-components';

import { colors } from 'styles';

export const Wrapper = styled.div`
  padding: 5px 0;
`;

export const StyledSelect = styled(Field)`
  width: 320px;
  color: ${colors.darkBlue};
  background-color: ${colors.lightGray};
  font-weight: bold;
  border: 2px solid ${colors.black};
  border-radius: 5px;
  padding: 7px;
`;
