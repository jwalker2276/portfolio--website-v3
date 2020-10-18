import React from "react";
import styled from "styled-components";
import SkillsetIcon from "./SkillsetIcon";

type IconsContainerProps = {
  largeIcon: string;
  smallIcons: string[];
};

const StyledRowIconsContainer = styled.div``;

const SkillsetRowIconsContainer = ({
  largeIcon,
  smallIcons,
}: IconsContainerProps): JSX.Element => (
  <StyledRowIconsContainer>
    <SkillsetIcon
      iconSource={largeIcon}
      iconAlt="code"
      iconHeight="83"
      iconWidth="80"
    />
    <SkillsetIcon
      iconSource={smallIcons[0]}
      iconAlt="application"
      iconHeight="40"
      iconWidth="40"
    />
  </StyledRowIconsContainer>
);

export default SkillsetRowIconsContainer;
