import React from "react";
import styled from "styled-components";
import UpperFooter from "./UpperFooter";
import LowerFooter from "./LowerFooter";

const StyledFooter = styled.footer``;

const Footer = (): JSX.Element => (
  <StyledFooter>
    <UpperFooter />
    <LowerFooter />
  </StyledFooter>
);

export default Footer;
