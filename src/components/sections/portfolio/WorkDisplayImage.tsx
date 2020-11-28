import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";

type WorkDisplayImageProps = {
  imagesource: string;
  style: React.CSSProperties;
};

const StyledWorkDisplayImage = styled(animated.div)<WorkDisplayImageProps>`
  min-width: 343px;
  min-height: 216px;
  width: 100%;
  height: 100%;
  background-image: url(${(props): string => props.imagesource});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
`;

const WorkDisplayImage = ({
  imagesource,
  style,
}: WorkDisplayImageProps): JSX.Element => (
  <StyledWorkDisplayImage
    imagesource={imagesource}
    style={style}
  ></StyledWorkDisplayImage>
);

export default WorkDisplayImage;
