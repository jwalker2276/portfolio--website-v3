import React from "react";
import styled from "styled-components";
import ImageTop from "../../../images/two_body_2.png";
import ImageRight from "../../../images/two_body.png";
import ImageBottom from "../../../images/four_body.png";

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
`;

const StyledBackgroundImageBottom = styled.div<BackgroundImagesProps>`
  position: absolute;
  left: 0px;
  bottom: -190px;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ backgroundImage }): string => backgroundImage});
  z-index: -10;
`;

const BackgroundImages = (): JSX.Element => (
  <>
    {/* <StyledBackgroundImageTop backgroundImage={ImageTop} />
    <StyledBackgroundImageRight backgroundImage={ImageRight} />
    <StyledBackgroundImageBottom backgroundImage={ImageBottom} /> */}
  </>
);

export default BackgroundImages;
