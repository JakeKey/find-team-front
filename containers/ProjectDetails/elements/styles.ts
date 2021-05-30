import styled from 'styled-components';

export const TitleWrapper = styled.header`
  display: flex;
  justify-content: center;
  grid-area: title;
`;

export const StyledTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;
`;

export const TitleInputContainer = styled.div`
  width: 100%;
  max-width: 700px;
`;

export const DescriptionWrapper = styled.div`
  grid-area: desc;
  justify-self: center;
  width: 100%;
  max-width: 600px;
`;

export const PositionsWrapper = styled.aside`
  grid-area: positions;
  justify-self: center;
`;

export const PositionsContainer = styled.div`
  width: 300px;
`;
