import React from "react";
import styled from "styled-components";
import { device } from "../../../breakpoints";
import PortfolioWorkDisplayActions from "./PortfolioWorkDisplayActions";
import PortfolioWorkGrid from "./PortfolioWorkGrid";

const StyledPortfolioWorkDisplay = styled.div`
  width: 100%;
  height: 100%;
  min-height: 768px;

  @media ${device.tablet} {
    min-height: 1px;
  }
`;

const PortfolioWorkDisplay = (): JSX.Element => (
  <StyledPortfolioWorkDisplay>
    {/* <PortfolioWorkDisplayActions />  */}
    <PortfolioWorkGrid />
  </StyledPortfolioWorkDisplay>
);

export default PortfolioWorkDisplay;
