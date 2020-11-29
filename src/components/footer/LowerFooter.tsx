import React from "react";
import styled from "styled-components";
import { device } from "../../breakpoints";
import BackToTopAction from "./BackToTopAction";
import CopyrightStatement from "./CopyrightStatement";

const StyledLowerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  @media ${device.mobileL} {
    margin-top: 24px;
    display: grid;
    grid-template: 1fr 1fr / 1fr;
    align-items: center;
    justify-items: center;
    row-gap: 16px;
  }
`;

const LowerFooter = (): JSX.Element => (
  <StyledLowerFooter>
    <CopyrightStatement />
    <BackToTopAction />
  </StyledLowerFooter>
);

export default LowerFooter;
