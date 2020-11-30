import React from "react";
import styled from "styled-components";
import NavButton from "./NavButton";

const StyledNavLinksMobile = styled.nav`
  display: grid;
  grid-template: 1fr 1fr 1fr 1fr / 1fr;
  align-items: center;
  row-gap: 24px;
  margin-top: 145px;
`;

const NavActionsMobile = (): JSX.Element => {
  return (
    <StyledNavLinksMobile>
      <NavButton buttonText="Skillset" sectionId="skillset" />
      <NavButton buttonText="Portfolio" sectionId="portfolio" />
      <NavButton buttonText="About" sectionId="about" />
      <NavButton buttonText="Contact" sectionId="contact" />
    </StyledNavLinksMobile>
  );
};

export default NavActionsMobile;
