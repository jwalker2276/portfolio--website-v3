import React from "react";
import styled from "styled-components";

type WorkDisplayActionProps = {
  displayActionText: string;
  dipslayActionEvent: () => void;
};

const StyledWorkDisplayAction = styled.button``;

const WorkDisplayAction = ({
  displayActionText,
  dipslayActionEvent,
}: WorkDisplayActionProps): JSX.Element => (
  <StyledWorkDisplayAction onClick={dipslayActionEvent}>
    {displayActionText}
  </StyledWorkDisplayAction>
);

export default WorkDisplayAction;
