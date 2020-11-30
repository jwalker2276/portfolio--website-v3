import React from "react";
import styled from "styled-components";
import SkillsetIcon from "./SkillsetIcon";
import SkillsetAnimatedIcons from "./SkillsetAnimatedIcons";
import { device } from "../../../breakpoints";

type IconsContainerProps = {
  largeIcon: string;
  smallIcons: string[];
};

const StyledRowIconsContainer = styled.div`
  width: 100%;
  max-width: 384px;
  display: grid;
  grid-template: 128px / 128px 1fr 65px;
  justify-items: center;
  align-items: center;
  margin-bottom: 16px;

  @media ${device.tablet} {
    max-width: 100%;
    grid-template: auto / auto 1fr auto;
  }
`;

const StyledHR = styled.hr`
  border: 0 none;
  border-top: 2px dashed var(--neutral--color-000);
  background: none;
  width: 100%;
  height: 0px;
`;

const SkillsetRowIconsContainer = ({
  largeIcon,
  smallIcons,
}: IconsContainerProps): JSX.Element => (
  <StyledRowIconsContainer>
    <SkillsetIcon iconSource={largeIcon} iconAlt="code" />
    <StyledHR />
    <SkillsetAnimatedIcons iconSources={smallIcons} iconAlt="application" />
  </StyledRowIconsContainer>
);

export default SkillsetRowIconsContainer;
