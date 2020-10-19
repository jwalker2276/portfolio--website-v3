import React from "react";
import styled from "styled-components";
import WorkDisplayAction from "./WorkDisplayAction";

const StyledPortfolioWorkDisplayActions = styled.div``;

const selectionEvent = (selectionName: string): void => {
  console.log(`Clicked ${selectionName} button`);
};

const PortfolioWorkDisplayActions = (): JSX.Element => (
  <StyledPortfolioWorkDisplayActions>
    <WorkDisplayAction
      displayActionText="All Projects"
      dipslayActionEvent={(): void => selectionEvent("all")}
    />
    <WorkDisplayAction
      displayActionText="Web Applications"
      dipslayActionEvent={(): void => selectionEvent("apps")}
    />
    <WorkDisplayAction
      displayActionText="Web Sites"
      dipslayActionEvent={(): void => selectionEvent("sites")}
    />
    <WorkDisplayAction
      displayActionText="Features"
      dipslayActionEvent={(): void => selectionEvent("features")}
    />
  </StyledPortfolioWorkDisplayActions>
);

export default PortfolioWorkDisplayActions;
