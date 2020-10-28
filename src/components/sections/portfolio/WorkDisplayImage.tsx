import React from "react";
import styled from "styled-components";

type WorkDisplayImageProps = {
  imageSource: string;
};

const StyledWorkDisplayImage = styled.div<WorkDisplayImageProps>`
  min-width: 343px;
  min-height: 216px;
  width: 100%;
  height: 100%;
  background-image: url(${(props): string => props.imageSource});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
`;

const WorkDisplayImage = ({
  imageSource,
}: WorkDisplayImageProps): JSX.Element => (
  <StyledWorkDisplayImage imageSource={imageSource}></StyledWorkDisplayImage>
);

export default WorkDisplayImage;
