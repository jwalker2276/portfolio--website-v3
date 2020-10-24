import React from "react";
import styled from "styled-components";
import NavButton from "./NavButton";

const StyledNavLinks = styled.nav``;

const NavLinks = (): JSX.Element => (
  <StyledNavLinks>
    <NavButton buttonText="Skillset" />
    <NavButton buttonText="Portfolio" />
    <NavButton buttonText="About" />
    <NavButton buttonText="Contact" />
  </StyledNavLinks>
);

export default NavLinks;
