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
  @font-face {
    font-family: WorkSans;
    src: url('/fonts/WorkSans/WorkSans.ttf') format('truetype');
  }
  @font-face {
    font-family: WorkSans;
    font-style: italic;
    src: url('/fonts/WorkSans/WorkSans-Italic.ttf') format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.darkGray};

    font-family: WorkSans, Arial, Helvetica, sans-serif;
  }
`;

const MD_LG_BREAKPOINT = 1024;
const SM_MD_BREAKPOINT = 550;

export const breakpoints = {
  sm: {
    min: 0,
    max: SM_MD_BREAKPOINT,
  },
  md: {
    min: SM_MD_BREAKPOINT,
    max: MD_LG_BREAKPOINT,
  },
  lg: {
    min: MD_LG_BREAKPOINT,
    max: null,
  },
};
