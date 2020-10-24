import React from "react";
import styled from "styled-components";

const StyledMenuButtonAccent = styled.svg``;

const MenuButtonAccent = (): JSX.Element => (
  <StyledMenuButtonAccent
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </StyledMenuButtonAccent>
);

export default MenuButtonAccent;
