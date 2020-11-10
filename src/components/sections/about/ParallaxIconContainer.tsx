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

const transMid = (x: number, y: number): string =>
  `translate3d(${x / 7}px,${y / 7}px, 0)`;

const transBottom = (x: number, y: number): string =>
  `translate3d(${x / 10}px,${y / 10}px,0)`;

// Styled component wrapper div
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
  iconMid,
  iconBottom,
  properties,
  varient,
}: ParallaxIconContainerProps): JSX.Element => {
  if (varient === "twoLayers") {
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
  } else {
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
          transformFunc={transMid}
          bkgimg={iconMid}
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
  }
};

export default ParallaxIcon;
