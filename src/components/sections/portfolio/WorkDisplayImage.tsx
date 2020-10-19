import React from "react";
import styled from "styled-components";

type WorkDisplayImageProps = {
  imageSource: string;
  imageAlt: string;
};

const StyledWorkDisplayImage = styled.img``;

const WorkDisplayImage = ({
  imageSource,
  imageAlt,
}: WorkDisplayImageProps): JSX.Element => (
  <StyledWorkDisplayImage
    src={imageSource}
    alt={imageAlt}
  ></StyledWorkDisplayImage>
);

export default WorkDisplayImage;
