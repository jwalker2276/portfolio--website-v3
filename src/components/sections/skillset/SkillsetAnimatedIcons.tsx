import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

type SkillsetIconProps = {
  iconSources: string[];
  iconAlt: string;
};

const StyledSkillsetIconOne = styled(animated.img)`
  position: absolute;
`;

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
  position: relative;
  overflow: hidden;
`;

const SkillAnimatedIcons = ({
  iconSources,
  iconAlt,
}: SkillsetIconProps): JSX.Element => {
  // State for animations
  const [isHiding, setHiding] = useState(true);

  // Configs for animations
  const animationPropsOne = useSpring({
    marginTop: isHiding ? 150 : 0,
    delay: 2000,
    config: config.wobbly,
    onRest: () => setHiding(!isHiding),
  });

  const animationPropsTwo = useSpring({
    marginTop: isHiding ? 0 : 150,
    delay: 2000,
    config: config.wobbly,
    onRest: () => setHiding(!isHiding),
  });

  return (
    <StyledIconCircle>
      <StyledSkillsetIconOne
        style={animationPropsOne}
        src={iconSources[0]}
        alt={iconAlt}
        width="40px"
        height="40px"
      />
      <StyledSkillsetIconOne
        style={animationPropsTwo}
        src={iconSources[1]}
        alt={iconAlt}
        width="40px"
        height="40px"
      />
    </StyledIconCircle>
  );
};

export default SkillAnimatedIcons;
