import styled from 'styled-components';

import { breakpoints, colors } from 'styles';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.lightBlue};
  max-width: 400px;
  margin: 50px auto 0;
  padding: 50px;
  border-radius: 10px;
  @media screen and (max-width: ${breakpoints.sm.max}px) {
    margin-top: 0;
  }
`;

export const Header = styled.h2`
  font-size: 26px;
  padding-bottom: 20px;
`;
