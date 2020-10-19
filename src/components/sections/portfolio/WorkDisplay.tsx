import React from "react";
import styled from "styled-components";
import WorkDisplayImage from "./WorkDisplayImage";

type WorkDisplayProps = {
  imageSource: string;
  imageAlt: string;
  linkToProject: string;
  linkToCode?: string;
  projectName: string;
  projectType: string;
};

const StyledWorkDisplay = styled.a``;

const WorkDisplay = ({
  imageSource,
  imageAlt,
  linkToProject,
  linkToCode,
  projectName,
  projectType,
}: WorkDisplayProps): JSX.Element => (
  <StyledWorkDisplay href={linkToProject} target="noreferrer nopener">
    <WorkDisplayImage imageSource={imageSource} imageAlt={imageAlt} />
  </StyledWorkDisplay>
);

export default WorkDisplay;
