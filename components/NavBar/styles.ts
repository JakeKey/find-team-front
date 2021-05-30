import styled, { css } from 'styled-components';

import Icon from 'components/Icon';

import { breakpoints, colors } from 'styles';

const iconStyles = css`
  cursor: pointer;
  transition: opacity 0.2s;
  padding: 15px;
  margin: 0;

  &:hover {
    opacity: 0.9;
  }
`;

export const StyledIcon = styled(Icon)`
  ${iconStyles}

  @media screen and (max-width: ${breakpoints.md.max}px) {
    padding: 25px 0;
  }
`;

export const MenuIcon = styled(Icon)`
  ${iconStyles}
`;

export const Navigation = styled.nav<{ isMenuOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.black};

  & ${MenuIcon} {
    display: none;
  }

  @media screen and (max-width: ${breakpoints.md.max}px) {
    flex-direction: row-reverse;
    & > div {
      display: none;
    }
    & ${MenuIcon} {
      display: block;
    }
    ${({ isMenuOpen }) =>
      isMenuOpen &&
      css`
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        width: 100vw;
        height: 100vh;

        & ${MenuIcon} {
          position: absolute;
          top: 0px;
          right: 0px;
        }

        & > div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}
  }
`;

export const NavButton = styled.div<{ isActive: boolean }>`
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  padding: 15px 20px;
  transition: opacity 0.2s;

  & a {
    text-decoration: none;
    color: ${colors.lightGray};

    &:hover {
      opacity: 0.9;
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${colors.darkGray};
    `}

  @media screen and (max-width: ${breakpoints.md.max}px) {
    padding: 25px 0;
  }
`;
