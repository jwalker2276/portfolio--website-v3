import React from "react";
import styled from "styled-components";
import { device } from "../../../breakpoints";

type WorkDisplayImageProps = {
  src: string;
  alt: string;
};

const StyledWorkDisplayImage = styled.img<WorkDisplayImageProps>`
  width: 100%;
  height: 100%;
  border-radius: 5px;

  @media ${device.tablet} {
    position: relative;
    min-width: 1px;
    min-height: 1px;
  }
`;

const WorkDisplayImage = ({ src, alt }: WorkDisplayImageProps): JSX.Element => {
  return <StyledWorkDisplayImage src={src} alt={alt} />;
};

export default WorkDisplayImage;
