import React from "react";
import styled from "styled-components";
import StyledLogoLink from "../common/Logo";
import UpperFooterMainStatement from "./UpperFooterMainStatement";
import NavLinks from "../nav/NavLinks";
import { device } from "../../breakpoints";

const StyledUpperFooter = styled.div`
  display: grid;
  grid-template: 1fr / auto 1fr auto;
  justify-items: center;
  align-items: center;
  min-height: 256px;

  @media ${device.tablet} {
    grid-template: 1fr 1fr / auto 1fr;
    min-height: 0;
    row-gap: 24px;
  } ;
`;

const UpperFooter = (): JSX.Element => (
  <StyledUpperFooter>
    <StyledLogoLink sizeVarient="large" />
    <UpperFooterMainStatement statementText="Let's make something amazing." />
    <NavLinks />
  </StyledUpperFooter>
);

export default UpperFooter;
