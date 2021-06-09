import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const colors = {
  lightBlue: '#40E0D0',
  darkRed: '#8B0000',
  lightRed: '#FF0000',

  white: '#fff',
  black: '#000',
  blue: '#003566',
  darkBlue: '#001D3D',
  lightGray: '#CFD3D7',
  gray: '#212529',
  darkGray: '#495057',
};

export const GlobalStyle = createGlobalStyle`
  ${reset};

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
    background-color: ${colors.blue};
    color: ${colors.lightGray};

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
