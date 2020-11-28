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
    <NavButton buttonText="Skillset" sectionId="skillset" />
    <NavButton buttonText="Portfolio" sectionId="portfolio" />
    <NavButton buttonText="About" sectionId="about" />
    <NavButton buttonText="Contact" sectionId="contact" />
  </StyledNavLinks>
);

export default NavLinks;
