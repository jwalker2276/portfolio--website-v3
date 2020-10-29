import React from "react";
import styled from "styled-components";

// TODO : Stopped here, maybe use react spring with on scroll effects.

type ThreeDIconsProps = {
  iconBottom: string;
  iconMid?: string;
  iconTop: string;
  varient: "twoLayers" | "threeLayers";
};

const StyledThreeDIcons = styled.div`
  position: relative;
  min-height: 300px;
  min-width: 300px;
`;

const BaseIcon = styled.img`
  --p: 5000px;
  --rotX: 20deg;
  --rotY: 30deg;
  --rotZ: -20deg;
  --transX: 50px;
  --transY: 0px;

  position: absolute;
  transform-style: preserve-3d;
  transform: perspective(var(--p)) rotateX(var(--rotX)) rotateY(var(--rotY))
    rotateZ(var(--rotZ)) translateX(var(--transX)) translateY(var(--transY))
    translateZ(50px);

  /* transition: all ease 1600ms; */
`;

const IconTop = styled(BaseIcon)`
  width: 111px;
  top: 80px;
  left: 0px;
  transform: perspective(var(--p)) rotateX(var(--rotX)) rotateY(var(--rotY))
    rotateZ(var(--rotZ)) translateX(var(--transX)) translateY(var(--transY))
    translateZ(125px);
`;

const IconMid = styled(BaseIcon)`
  width: 100px;
  top: 60px;
  left: 50px;
  transform: perspective(var(--p)) rotateX(var(--rotX)) rotateY(var(--rotY))
    rotateZ(var(--rotZ)) translateX(var(--transX)) translateY(var(--transY))
    translateZ(100px);
`;

const IconBottom = styled(BaseIcon)`
  width: 200px;
  top: 0px;
`;

const ThreeDIcons = ({
  iconTop,
  iconMid,
  iconBottom,
  varient,
}: ThreeDIconsProps): JSX.Element => {
  if (varient === "twoLayers") {
    return (
      <StyledThreeDIcons>
        <IconBottom src={iconBottom} />
        <IconTop src={iconTop} />
      </StyledThreeDIcons>
    );
  } else {
    return (
      <StyledThreeDIcons>
        <IconBottom src={iconBottom} />
        <IconMid src={iconMid} />
        <IconTop src={iconTop} />
      </StyledThreeDIcons>
    );
  }
};

export default ThreeDIcons;
