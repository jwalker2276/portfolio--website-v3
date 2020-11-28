import React from "react";
import styled from "styled-components";
import bkImage from "../../../images/hero_bk.png";

type BackgroundImageHeroProps = {
  backgroundImage: string;
};

const StyledBackgroundImageHero = styled.div<BackgroundImageHeroProps>`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ backgroundImage }): string => backgroundImage});
`;

const BackgroundImageHero = (): JSX.Element => (
  <StyledBackgroundImageHero backgroundImage={bkImage} />
);

export default BackgroundImageHero;
