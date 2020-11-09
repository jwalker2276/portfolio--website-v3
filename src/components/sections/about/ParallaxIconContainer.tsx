import React from "react";
import styled from "styled-components";
import AnimatedDiv from "./AnimatedDiv";

// Props types
type ParallaxIconContainerProps = {
  iconBottom: string;
  iconMid?: string;
  iconTop: string;
  varient: "twoLayers" | "threeLayers";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  properties: any;
};

// React spring functions
const transTop = (x: number, y: number): string =>
  `translate3d(${x / 5}px,${y / 5}px,0)`;

const transBottom = (x: number, y: number): string =>
  `translate3d(${x / 10}px,${y / 10}px,0)`;

// Styled component wrapper div (.container in example)
const StyledParallaxIconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// React Component
const ParallaxIcon = ({
  iconTop,
  iconBottom,
  properties,
}: ParallaxIconContainerProps): JSX.Element => {
  return (
    <StyledParallaxIconContainer>
      <AnimatedDiv
        transformFunc={transTop}
        bkgimg={iconBottom}
        properties={properties}
        eleheight="250"
        elewidth="250"
      />
      <AnimatedDiv
        transformFunc={transBottom}
        bkgimg={iconTop}
        properties={properties}
        eleheight="100"
        elewidth="100"
      />
    </StyledParallaxIconContainer>
  );
};

export default ParallaxIcon;
