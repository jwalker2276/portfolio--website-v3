import React from "react";
import styled from "styled-components";

type SkillsetIconProps = {
  iconSource: string;
  iconAlt: string;
  iconWidth: string;
  iconHeight: string;
};

const StyledSkillsetIcon = styled.img``;

const SkillsetIcon = ({
  iconSource,
  iconAlt,
}: SkillsetIconProps): JSX.Element => (
  <StyledSkillsetIcon src={iconSource} alt={iconAlt}></StyledSkillsetIcon>
);

export default SkillsetIcon;
