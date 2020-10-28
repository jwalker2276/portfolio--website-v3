import React from "react";
import styled from "styled-components";

type WorkDisplayInfoProps = {
  linkToCode?: string;
  projectName: string;
  projectType: string;
};

const StyledWorkDisplayInfo = styled.div``;

const WorkDisplayInfo = ({
  linkToCode,
  projectName,
  projectType,
}: WorkDisplayInfoProps): JSX.Element => (
  <StyledWorkDisplayInfo>
    <h5>{projectName}</h5>
    <p>{projectType}</p>
  </StyledWorkDisplayInfo>
);

export default WorkDisplayInfo;
