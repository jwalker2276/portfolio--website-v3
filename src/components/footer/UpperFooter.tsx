import React from "react";
import styled from "styled-components";
import StyledLogoLink from "../common/Logo";
import UpperFooterMainStatement from "./UpperFooterMainStatement";
import FooterNav from "./FooterNav";

const StyledUpperFooter = styled.div``;

const UpperFooter = (): JSX.Element => (
  <StyledUpperFooter>
    <StyledLogoLink />
    <UpperFooterMainStatement statementText="Let's make something amazing." />
    <FooterNav />
  </StyledUpperFooter>
);

export default UpperFooter;
