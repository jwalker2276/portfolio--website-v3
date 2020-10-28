import React from "react";
import styled from "styled-components";
import PortfolioWorkDisplayActions from "./PortfolioWorkDisplayActions";
import PortfolioWorkGrid from "./PortfolioWorkGrid";

const StyledPortfolioWorkDisplay = styled.div`
  width: 100%;
  height: 100%;
  min-height: 768px;
`;

const PortfolioWorkDisplay = (): JSX.Element => (
  <StyledPortfolioWorkDisplay>
    {/* <PortfolioWorkDisplayActions />  */}
    <PortfolioWorkGrid />
  </StyledPortfolioWorkDisplay>
);

export default PortfolioWorkDisplay;
