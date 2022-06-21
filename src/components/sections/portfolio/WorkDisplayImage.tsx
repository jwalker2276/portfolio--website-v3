import React from "react";
import styled from "styled-components";
import { device } from "../../../breakpoints";

type WorkDisplayImageProps = {
  src: string;
  alt: string;
};

const StyledWorkDisplayImage = styled.img<WorkDisplayImageProps>`
  width: 100%;
  max-width: 480px;
  height: auto;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 5px var(--shadow--color-500);

  @media ${device.tablet} {
    position: relative;
    min-width: 1px;
    min-height: 1px;
  }

  @media ${device.tabletS} {
    max-width: 100%;
  }
`;

const WorkDisplayImage = ({ src, alt }: WorkDisplayImageProps): JSX.Element => {
  return <StyledWorkDisplayImage src={src} alt={alt} />;
};

export default WorkDisplayImage;
