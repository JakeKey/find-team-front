import styled from 'styled-components';

import Icon from 'components/Icon';

import { colors } from 'styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.darkBlue};
`;

export const StyledSigns = styled(Icon)`
  padding: 0 5px;
  cursor: pointer;
`;
