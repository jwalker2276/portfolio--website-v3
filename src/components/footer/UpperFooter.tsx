import React from "react";
import styled from "styled-components";
import StyledLogoLink from "../common/Logo";
import UpperFooterMainStatement from "./UpperFooterMainStatement";
import NavLinks from "../nav/NavLinks";

const StyledUpperFooter = styled.div``;

const UpperFooter = (): JSX.Element => (
  <StyledUpperFooter>
    <StyledLogoLink />
    <UpperFooterMainStatement statementText="Let's make something amazing." />
    <NavLinks />
  </StyledUpperFooter>
);

export default UpperFooter;
