import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer``;

const Footer = (): JSX.Element => (
  <StyledFooter>© {new Date().getFullYear()}</StyledFooter>
);

export default Footer;
