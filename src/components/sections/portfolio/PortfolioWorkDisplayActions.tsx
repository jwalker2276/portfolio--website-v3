import React from "react";
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

const PortfolioWorkDisplayActions = (): JSX.Element => {
  // const [eventName, setName] = useState("all");

  return (
    <StyledPortfolioWorkDisplayActions>
      <WorkDisplayAction
        displayActionText="All Projects"
        displayActionEvent={(): void => selectionEvent("all")}
        // isActive={true}
      />
      <WorkDisplayAction
        displayActionText="Web Applications"
        displayActionEvent={(): void => selectionEvent("apps")}
        // isActive={false}
      />
      <WorkDisplayAction
        displayActionText="Web Sites"
        displayActionEvent={(): void => selectionEvent("sites")}
        // isActive={false}
      />
      <WorkDisplayAction
        displayActionText="Features"
        displayActionEvent={(): void => selectionEvent("features")}
        // isActive={false}
      />
    </StyledPortfolioWorkDisplayActions>
  );
};

export default PortfolioWorkDisplayActions;
