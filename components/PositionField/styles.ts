import styled from 'styled-components';

import Icon from 'components/Icon';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
`;

export const StyledSigns = styled(Icon)`
  padding: 0 5px;
  cursor: pointer;
  height: 15px;
`;
