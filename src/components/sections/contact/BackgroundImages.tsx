import React from "react";
import styled from "styled-components";
import ImageTop from "../../../images/two_body_2_v2.png";
import ImageRight from "../../../images/two_body_v2.png";
import ImageBottom from "../../../images/four_body_v2.png";
import { device } from "../../../breakpoints";

type BackgroundImagesProps = {
  backgroundImage: string;
};

const StyledBackgroundImageTop = styled.div<BackgroundImagesProps>`
  position: absolute;
  right: 50px;
  top: 0px;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ backgroundImage }): string => backgroundImage});
  z-index: -10;

  @media ${device.mobileL} {
    right: -35%;
    top: 10%;
  }
`;

const StyledBackgroundImageRight = styled.div<BackgroundImagesProps>`
  position: absolute;
  right: -400px;
  top: 350px;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ backgroundImage }): string => backgroundImage});
  z-index: -10;

  @media ${device.mobileL} {
    display: none;
  }
`;

const StyledBackgroundImageBottom = styled.div<BackgroundImagesProps>`
  position: absolute;
  left: 0px;
  bottom: -150px;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ backgroundImage }): string => backgroundImage});
  z-index: -10;
`;

const BackgroundImages = (): JSX.Element => (
  <>
    <StyledBackgroundImageTop backgroundImage={ImageTop} />
    <StyledBackgroundImageRight backgroundImage={ImageRight} />
    <StyledBackgroundImageBottom backgroundImage={ImageBottom} />
  </>
);

export default BackgroundImages;
