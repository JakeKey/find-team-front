import { createGlobalStyle } from 'styled-components';

export const colors = {
  white: '#fff',
  black: '#1B1212',
  lightGray: '#D3D3D3',
  darkGray: '#A9A9A9',
  lightBlue: '#40E0D0',
  darkBlue: '#00008B',
  darkRed: '#8B0000',
  lightRed: '#FF0000',
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.darkGray};
  }
`;
