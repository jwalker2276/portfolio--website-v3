import React from "react";
import styled from "styled-components";
import BackToTopAction from "./BackToTopAction";
import CopyrightStatement from "./CopyrightStatement";

const StyledLowerFooter = styled.div``;

const LowerFooter = (): JSX.Element => (
  <StyledLowerFooter>
    <CopyrightStatement />
    <BackToTopAction />
  </StyledLowerFooter>
);

export default LowerFooter;
