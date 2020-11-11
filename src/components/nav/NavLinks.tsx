import React from "react";
import styled from "styled-components";
import NavButton from "./NavButton";

const StyledNavLinks = styled.nav`
  display: grid;
  justify-items: left;
  align-items: center;
  row-gap: 24px;
  grid-template: repeat(4, 1fr) / 1fr;
  padding-right: 18px;
`;

const NavLinks = (): JSX.Element => (
  <StyledNavLinks>
    <NavButton buttonText="Skillset" />
    <NavButton buttonText="Portfolio" />
    <NavButton buttonText="About" />
    <NavButton buttonText="Contact" />
  </StyledNavLinks>
);

export default NavLinks;
