import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  background-color: grey;
  box-sizing: border-box;
  padding: 20px;
  height: 250px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transition: opacity 0.2s;
  }
`;

export const ProjectName = styled.div`
  font-weight: bold;
  text-align: center;
`;
