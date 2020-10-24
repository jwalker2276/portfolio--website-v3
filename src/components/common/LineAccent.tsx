import React from "react";
import styled from "styled-components";

const StyledLineSVG = styled.svg`
  width: 48px;
  height: 1px;
`;

const StyledLine = styled.line`
  stroke-width: 10px;
  stroke: var(--primary--color-100);
`;

const LineAccent = (): JSX.Element => (
  <StyledLineSVG viewBox="0 0 48 1" xmlns="http://www.w3.org/2000/svg">
    <StyledLine x1="48" y1="0.5" y2="0.5" />
  </StyledLineSVG>
);

export default LineAccent;
