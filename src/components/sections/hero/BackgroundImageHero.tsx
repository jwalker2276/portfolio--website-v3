import React from "react";
import styled from "styled-components";
import { device } from "../../../breakpoints";
import bkImage from "../../../images/hero_bk.png";

type BackgroundImageHeroProps = {
  backgroundImage: string;
};

const StyledBackgroundImageHero = styled.div<BackgroundImageHeroProps>`
  width: 100%;
  height: 100%;
  max-height: 735px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ backgroundImage }): string => backgroundImage});
  z-index: -10;

  @media ${device.laptop} {
    max-height: 512px;
  }

  @media ${device.tablet} {
    max-height: 400px;
  }

  @media ${device.tabletS} {
    display: none;
  }
`;

const BackgroundImageHero = (): JSX.Element => (
  <StyledBackgroundImageHero backgroundImage={bkImage} />
);

export default BackgroundImageHero;
