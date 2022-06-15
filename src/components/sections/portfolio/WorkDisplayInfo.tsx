import React from "react";
import styled from "styled-components";
import WorkLink from "./WorkLink";
import { device } from "../../../breakpoints";

type WorkDisplayInfoProps = {
  linkToProject: string;
  linkToCode?: string;
  projectName: string;
  projectType: string;
};

const StyledWorkDisplayInfo = styled.div`
  height: 100%;
  width: 100%;
  padding: 16px;
  display: grid;
  grid-template: 1fr 1fr / 1fr;
  justify-items: center;
  align-items: center;
  transition: opacity 0.25s ease-in-out;
  z-index: 10;

  @media ${device.tablet} {
    position: relative;
    min-width: 1px;
    min-height: 1px;
  }
`;

const StyledInfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLinksWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
`;

const StyledProjectName = styled.h5`
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: var(--primary--color-000);
  margin: 0 0 8px 0;
`;

const StyledProjectType = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--primary--color-100);
  margin: 0 0 0 0;
`;

const WorkDisplayInfo = ({
  linkToProject,
  linkToCode,
  projectName,
  projectType,
}: WorkDisplayInfoProps): JSX.Element => {
  return (
    <StyledWorkDisplayInfo>
      <StyledInfoWrapper>
        <StyledProjectName>{projectName}</StyledProjectName>
        <StyledProjectType>{projectType}</StyledProjectType>
      </StyledInfoWrapper>
      <StyledLinksWrapper>
        <WorkLink link={linkToProject} variant="primary" />
        <WorkLink
          link={linkToCode}
          variant={linkToCode ? "secondary" : "private"}
        />
      </StyledLinksWrapper>
    </StyledWorkDisplayInfo>
  );
};

export default WorkDisplayInfo;
