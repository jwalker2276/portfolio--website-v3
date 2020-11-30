import React, { useState, useCallback } from "react";
import styled from "styled-components";
import WorkDisplayImage from "./WorkDisplayImage";
import WorkDisplayInfo from "./WorkDisplayInfo";

import { useTransition } from "react-spring";
import { device } from "../../../breakpoints";

type WorkDisplayProps = {
  imagesource: string;
  linkToProject: string;
  linkToCode?: string;
  projectName: string;
  projectType: string;
  gridArea: string;
};

const StyledWorkDisplay = styled.div<Pick<WorkDisplayProps, "gridArea">>`
  grid-area: ${(props): string => props.gridArea};
  position: relative;

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
  gridArea,
}: WorkDisplayProps): JSX.Element => {
  // Pages for react spring
  const pages = [
    ({ style }): JSX.Element => (
      <WorkDisplayImage imagesource={imagesource} style={{ ...style }} />
    ),
    ({ style }): JSX.Element => (
      <WorkDisplayInfo
        linkToProject={linkToProject}
        linkToCode={linkToCode}
        projectName={projectName}
        projectType={projectType}
        style={{ ...style }}
      />
    ),
  ];

  // React Spring
  const [index, setPage] = useState(0);
  const onClick = useCallback(() => {
    setPage((pageState) => (pageState + 1) % 2);
  }, []);
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(0,100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0%,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-50%,0)" },
  });

  return (
    <StyledWorkDisplay gridArea={gridArea} onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item];
        return <Page key={key} style={props} />;
      })}
    </StyledWorkDisplay>
  );
};

export default WorkDisplay;
