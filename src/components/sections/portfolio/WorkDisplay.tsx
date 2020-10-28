import React from "react";
import styled from "styled-components";
import WorkDisplayImage from "./WorkDisplayImage";
import WorkDisplayInfo from "./WorkDisplayInfo";

type WorkDisplayProps = {
  imageSource: string;
  linkToProject: string;
  linkToCode?: string;
  projectName: string;
  projectType: string;
  gridArea: string;
};

const StyledWorkDisplay = styled.a<Pick<WorkDisplayProps, "gridArea">>`
  grid-area: ${(props): string => props.gridArea};
`;

const WorkDisplay = ({
  imageSource,
  linkToProject,
  linkToCode,
  projectName,
  projectType,
  gridArea,
}: WorkDisplayProps): JSX.Element => (
  <StyledWorkDisplay
    href={linkToProject}
    target="noreferrer noopener"
    gridArea={gridArea}
  >
    <WorkDisplayImage imageSource={imageSource} />
    {/* <WorkDisplayInfo
      linkToCode={linkToCode}
      projectName={projectName}
      projectType={projectType}
    /> */}
  </StyledWorkDisplay>
);

export default WorkDisplay;
