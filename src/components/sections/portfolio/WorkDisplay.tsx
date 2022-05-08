import React, { useState, useCallback } from "react";
import styled from "styled-components";
import WorkDisplayImage from "./WorkDisplayImage";
import WorkDisplayInfo from "./WorkDisplayInfo";

import { device } from "../../../breakpoints";

type WorkDisplayProps = {
  imagesource: string;
  linkToProject: string;
  linkToCode?: string;
  projectName: string;
  projectType: string;
};

const StyledWorkDisplay = styled.div`
  position: relative;
  border: 2px solid var(--neutral--color-800);

  border-radius: 5px;

  @media ${device.tablet} {
    width: 100%;
    height: 100%;
    grid-area: unset;
  }
`;

const WorkDisplay = ({
  imagesource,
  linkToProject,
  linkToCode,
  projectName,
  projectType,
}: WorkDisplayProps): JSX.Element => {
  const [showDetails, setShowDetails] = useState(false);

  const handleEvent = () => {
    setShowDetails(!showDetails);
  };

  return (
    <StyledWorkDisplay
      onClick={handleEvent}
      onMouseEnter={handleEvent}
      onMouseLeave={handleEvent}
    >
      <WorkDisplayImage imagesource={imagesource} />
      <WorkDisplayInfo
        showDetails={showDetails}
        linkToProject={linkToProject}
        linkToCode={linkToCode}
        projectName={projectName}
        projectType={projectType}
      />
    </StyledWorkDisplay>
  );
};

export default WorkDisplay;
