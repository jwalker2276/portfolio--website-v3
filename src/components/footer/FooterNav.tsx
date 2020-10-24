import React from "react";
import styled from "styled-components";
import FooterNavButton from "./FooterNavButton";

const StyledFooterNav = styled.nav``;

const FooterNav = (): JSX.Element => (
  <StyledFooterNav>
    <FooterNavButton buttonText="Skillset" />
    <FooterNavButton buttonText="Portfolio" />
    <FooterNavButton buttonText="About" />
    <FooterNavButton buttonText="Contact" />
  </StyledFooterNav>
);

export default FooterNav;
