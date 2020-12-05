import React from "react";
import styled from "styled-components";
import { device } from "../../../breakpoints";
import bkImage from "../../../images/sun_v2.png";

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

  @media ${device.laptop} {
    display: none;
  }
`;

const BorderImageHero = (): JSX.Element => (
  <StyledBorderImageHero backgroundImage={bkImage} />
);

export default BorderImageHero;
