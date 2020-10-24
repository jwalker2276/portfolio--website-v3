import React from "react";
import styled from "styled-components";
import UpperFooter from "./UpperFooter";
import LowerFooter from "./LowerFooter";

const StyledFooter = styled.footer`
  padding: 0 24px;
  width: 100%;
`;

const Footer = (): JSX.Element => (
  <StyledFooter>
    <UpperFooter />
    <LowerFooter />
  </StyledFooter>
);

export default Footer;
