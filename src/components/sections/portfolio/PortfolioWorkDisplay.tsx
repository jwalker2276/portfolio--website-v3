import React from "react";
import styled from "styled-components";
import PortfolioWorkDisplayActions from "./PortfolioWorkDisplayActions";
import PortfolioWorkGrid from "./PortfolioWorkGrid";

const StyledPortfolioWorkDisplay = styled.div``;

const PortfolioWorkDisplay = (): JSX.Element => (
  <StyledPortfolioWorkDisplay>
    <PortfolioWorkDisplayActions />
    <PortfolioWorkGrid />
  </StyledPortfolioWorkDisplay>
);

export default PortfolioWorkDisplay;
