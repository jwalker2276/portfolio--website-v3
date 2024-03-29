import React from "react";
import styled from "styled-components";

type WorkDisplayActionProps = {
  displayActionText: string;
  displayActionEvent: () => void;
};

const StyledWorkDisplayAction = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-size: 16px;
  font-weight: 400;
  color: var(--neutral--color-000);
  margin-right: 24px;
  padding-bottom: 4px;
`;

const WorkDisplayAction = ({
  displayActionText,
  displayActionEvent,
}: WorkDisplayActionProps): JSX.Element => (
  <StyledWorkDisplayAction onClick={displayActionEvent}>
    {displayActionText}
  </StyledWorkDisplayAction>
);

export default WorkDisplayAction;
