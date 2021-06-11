import styled from 'styled-components';

import { breakpoints, colors } from 'styles';

export const FormContainer = styled.div`
  box-sizing: border-box;
  background-color: ${colors.lightGray};
  max-width: 450px;
  margin: 50px auto 0;
  padding: 80px;
  border-radius: 10px;
  color: ${colors.black};

  @media screen and (max-width: ${breakpoints.sm.max}px) {
    margin-top: 0;
  }
`;

export const Header = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 26px;
  padding-bottom: 20px;
  color: ${colors.black};
`;

export const CaptchaDisclaimer = styled.div`
  padding-top: 50px;
  font-size: 14px;
`;
