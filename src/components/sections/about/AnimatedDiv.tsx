import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";

type AnimatedDivProps = {
  transformFunc: (x: number, y: number) => string;
  bkgimg: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  properties: any;
  elewidth: string;
  eleheight: string;
};

const StyledAnimatedDiv = styled(animated.div)<{
  elewidth: string;
  eleheight: string;
  bkgimg: string;
}>`
  position: absolute;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
  width: ${({ elewidth }): string => elewidth}px;
  height: ${({ eleheight }): string => eleheight}px;
  background-image: url(${({ bkgimg }): string => bkgimg});
`;

const AnimatedDiv = ({
  transformFunc,
  bkgimg,
  properties,
  eleheight,
  elewidth,
}: AnimatedDivProps): JSX.Element => (
  <StyledAnimatedDiv
    style={{ transform: properties.xy.interpolate(transformFunc) }}
    bkgimg={bkgimg}
    eleheight={eleheight}
    elewidth={elewidth}
  />
);

export default AnimatedDiv;
