import React from "react";
import styled from "styled-components";
import { device } from "../../breakpoints";
import NavButton from "./NavButton";

type NavLinksProps = {
  variant?: string;
};

const StyledNavLinks = styled.nav`
  display: grid;
  justify-items: left;
  align-items: center;
  row-gap: 24px;
  grid-template: repeat(4, 1fr) / 1fr;
  padding-right: 18px;

  @media ${device.tablet} {
    grid-template: 1fr / repeat(4, 1fr);
    padding: 0;
    justify-items: center;
    grid-column: 1 / -1;
    width: 100%;
  }
`;

const StyledNavLinksTop = styled.nav`
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr 1fr;
  align-items: center;
  column-gap: 24px;
`;

const NavLinks = ({ variant }: NavLinksProps): JSX.Element => {
  if (variant === "top nav") {
    return (
      <StyledNavLinksTop>
        <NavButton buttonText="Skillset" sectionId="skillset" />
        <NavButton buttonText="Portfolio" sectionId="portfolio" />
        <NavButton buttonText="About" sectionId="about" />
        <NavButton buttonText="Contact" sectionId="contact" />
      </StyledNavLinksTop>
    );
  } else {
    return (
      <StyledNavLinks>
        <NavButton buttonText="Skillset" sectionId="skillset" />
        <NavButton buttonText="Portfolio" sectionId="portfolio" />
        <NavButton buttonText="About" sectionId="about" />
        <NavButton buttonText="Contact" sectionId="contact" />
      </StyledNavLinks>
    );
  }
};

export default NavLinks;
