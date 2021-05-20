import styled from 'styled-components';

import { colors } from 'styles';

export const Wrapper = styled.div`
  padding: 5px 0;
  color: ${colors.darkBlue};

  & a {
    font-weight: bold;
    text-decoration: none;
  }
`;
