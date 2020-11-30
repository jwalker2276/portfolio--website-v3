import React from "react";
import styled from "styled-components";
import { device } from "../../../breakpoints";
import bkImage from "../../../images/one_body.png";

type BorderImageAboutProps = {
  backgroundImage: string;
};

const StyledBorderImageAbout = styled.div<BorderImageAboutProps>`
  position: absolute;
  right: 0%;
  top: -10%;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ backgroundImage }): string => backgroundImage});
  z-index: -1;

  @media ${device.mobileL} {
    right: -41%;
    top: -14%;
  }
`;

const BorderImageAbout = (): JSX.Element => (
  <StyledBorderImageAbout backgroundImage={bkImage} />
);

export default BorderImageAbout;
