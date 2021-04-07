import styled from 'styled-components';

import { colors } from 'styles';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.lightBlue};
  max-width: 400px;
  margin: 50px auto 0;
  padding: 50px;
`;

export const Header = styled.h2`
  font-size: 18px;
  padding-bottom: 20px;
`;
