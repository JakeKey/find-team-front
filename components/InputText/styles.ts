import { Field } from 'formik';
import styled from 'styled-components';

import { colors } from 'styles';

export const Wrapper = styled.div`
  padding: 5px;
`;

export const Label = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

export const Error = styled.div`
  height: 10px;
  font-size: 11px;
  color: ${colors.lightRed};
  font-weight: bold;
`;

export const StyledField = styled(Field)`
  width: 200px;
  color: ${colors.darkBlue};
  background-color: ${colors.lightGray};
  font-weight: bold;
  border: 2px solid ${colors.black};
  padding: 5px;
`;
