import React from "react";
import styled from "styled-components";

type SkillsetIconProps = {
  iconSources: string[];
  iconAlt: string;
};

const StyledSkillsetIcon = styled.img``;

const StyledIconCircle = styled.div`
  background-color: var(--neutral--color-000);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 3 / -1;
  width: 65px;
  height: 65px;
`;

const SkillAnimatedIcons = ({
  iconSources,
  iconAlt,
}: SkillsetIconProps): JSX.Element => (
  <StyledIconCircle>
    <StyledSkillsetIcon
      src={iconSources[0]}
      alt={iconAlt}
      width="40px"
      height="40px"
    />
  </StyledIconCircle>
);

export default SkillAnimatedIcons;
