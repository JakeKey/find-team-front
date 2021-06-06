import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 0;
`;

export const ScrollContent = styled.div`
  display: grid;
  justify-content: center;
  grid: 250px / repeat(auto-fit, 250px);
  grid-gap: 50px;
`;
