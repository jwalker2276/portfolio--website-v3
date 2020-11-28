import React from "react";
import styled from "styled-components";
import bkImage from "../../../images/sun.png";

type BorderImageHeroProps = {
  backgroundImage: string;
};

const StyledBorderImageHero = styled.div<BorderImageHeroProps>`
  position: absolute;
  left: -200px;
  top: 40%;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ backgroundImage }): string => backgroundImage});
`;

const BorderImageHero = (): JSX.Element => (
  <StyledBorderImageHero backgroundImage={bkImage} />
);

export default BorderImageHero;
