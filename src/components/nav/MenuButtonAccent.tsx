import React from "react";
import styled from "styled-components";

const StyledMenuButtonAccent = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--neutral--color-900);
  stroke: var(--primary--color-100);
  stroke-width: 2;
`;

const MenuButtonAccent = (): JSX.Element => (
  <StyledMenuButtonAccent
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </StyledMenuButtonAccent>
);

export default MenuButtonAccent;
