import React from "react";
import styled from "styled-components";
import WorkDisplayImage from "./WorkDisplayImage";
import WorkDisplayInfo from "./WorkDisplayInfo";

import { device } from "../../../breakpoints";

type WorkDisplayProps = {
  imagesource: string;
  imageAlt: string;
  linkToProject: string;
  linkToCode?: string;
  projectName: string;
  projectType: string;
  flipColumnPosition?: boolean;
};

const StyledWorkDisplay = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr;

  @media ${device.tablet} {
    width: 100%;
    height: 100%;
    grid-area: unset;
  }
`;

const WorkDisplay = ({
  imagesource,
  imageAlt,
  linkToProject,
  linkToCode,
  projectName,
  projectType,
  flipColumnPosition,
}: WorkDisplayProps): JSX.Element => {
  if (flipColumnPosition) {
    return (
      <StyledWorkDisplay>
        <WorkDisplayInfo
          linkToProject={linkToProject}
          linkToCode={linkToCode}
          projectName={projectName}
          projectType={projectType}
        />
        <WorkDisplayImage src={imagesource} alt={imageAlt} />
      </StyledWorkDisplay>
    );
  }

  return (
    <StyledWorkDisplay>
      <WorkDisplayImage src={imagesource} alt={imageAlt} />
      <WorkDisplayInfo
        linkToProject={linkToProject}
        linkToCode={linkToCode}
        projectName={projectName}
        projectType={projectType}
      />
    </StyledWorkDisplay>
  );
};

export default WorkDisplay;
