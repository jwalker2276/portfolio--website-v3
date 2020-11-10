import React, { useState } from "react";
import styled from "styled-components";
import WorkDisplayAction from "./WorkDisplayAction";

const StyledPortfolioWorkDisplayActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 640px;
  border: 2px solid green;
  margin-bottom: 64px;
`;

const selectionEvent = (selectionName: string): void => {
  console.log(`Clicked ${selectionName} button`);
};

// TODO : Add filtering actions.
const PortfolioWorkDisplayActions = (): JSX.Element => {
  // const [eventName, setName] = useState("all");

  return (
    <StyledPortfolioWorkDisplayActions>
      <WorkDisplayAction
        displayActionText="All Projects"
        dipslayActionEvent={(): void => selectionEvent("all")}
        // isActive={true}
      />
      <WorkDisplayAction
        displayActionText="Web Applications"
        dipslayActionEvent={(): void => selectionEvent("apps")}
        // isActive={false}
      />
      <WorkDisplayAction
        displayActionText="Web Sites"
        dipslayActionEvent={(): void => selectionEvent("sites")}
        // isActive={false}
      />
      <WorkDisplayAction
        displayActionText="Features"
        dipslayActionEvent={(): void => selectionEvent("features")}
        // isActive={false}
      />
    </StyledPortfolioWorkDisplayActions>
  );
};

export default PortfolioWorkDisplayActions;
