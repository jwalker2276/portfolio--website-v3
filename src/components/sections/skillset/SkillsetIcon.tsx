import React from "react";
import styled from "styled-components";

type SkillsetIconProps = {
  iconSource: string;
  iconAlt: string;
};

const StyledSkillsetIcon = styled.img``;

const StyledIconCircle = styled.div`
  background-color: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 128px;
  height: 128px;
`;

const SkillsetIcon = ({
  iconSource,
  iconAlt,
}: SkillsetIconProps): JSX.Element => (
  <StyledIconCircle>
    <StyledSkillsetIcon src={iconSource} alt={iconAlt} height="83" width="80" />
  </StyledIconCircle>
);

export default SkillsetIcon;
