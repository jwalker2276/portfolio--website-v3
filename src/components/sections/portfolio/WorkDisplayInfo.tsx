import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import WorkLink from "./WorkLink";
import { device } from "../../../breakpoints";

type WorkDisplayInfoProps = {
  linkToProject: string;
  linkToCode?: string;
  projectName: string;
  projectType: string;
  style: React.CSSProperties;
};

const StyledWorkDisplayInfo = styled(animated.div)`
  position: absolute;
  min-width: 343px;
  min-height: 216px;
  background-color: var(--neutral--color-800);
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: 2px solid var(--primary--color-100);
  padding: 16px;
  display: grid;
  grid-template: auto auto 1fr / 1fr;
  box-shadow: inset 0px 0px 8px 4px var(--shadow--color-500);

  @media ${device.tablet} {
    position: relative;
    min-width: 1px;
    min-height: 1px;
  }
`;

const StyledLinksWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  align-items: center;
  justify-items: center;
`;

const StyledProjectName = styled.h5`
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: var(--primary--color-000);
  margin: 0 0 16px 0;
`;

const StyledProjectType = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: var(--primary--color-100);
  margin: 0 0 32px 0;
`;

const WorkDisplayInfo = ({
  linkToProject,
  linkToCode,
  projectName,
  projectType,
  style,
}: WorkDisplayInfoProps): JSX.Element => {
  return (
    <StyledWorkDisplayInfo style={style}>
      <StyledProjectName>{projectName}</StyledProjectName>
      <StyledProjectType>{projectType}</StyledProjectType>
      <StyledLinksWrapper>
        <WorkLink link={linkToProject} varient="primary" />

        <WorkLink
          link={linkToCode}
          varient={linkToCode === undefined ? "private" : "secondary"}
        />
      </StyledLinksWrapper>
    </StyledWorkDisplayInfo>
  );
};

export default WorkDisplayInfo;
