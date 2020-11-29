import React from "react";
import styled from "styled-components";
import UpperFooter from "./UpperFooter";
import LowerFooter from "./LowerFooter";
import { device } from "../../breakpoints";

const StyledFooter = styled.footer`
  padding: 0 24px;
  width: 100%;

  @media ${device.tablet} {
    padding: 0;
  }
`;

const Footer = (): JSX.Element => (
  <StyledFooter>
    <UpperFooter />
    <LowerFooter />
  </StyledFooter>
);

export default Footer;
