import React from "react";
import styled from "styled-components";
import { device } from "../../../breakpoints";
import bkImage from "../../../images/three_body.png";

type BorderImageSkillsetProps = {
  backgroundImage: string;
};

const StyledBorderImageSkillset = styled.div<BorderImageSkillsetProps>`
  position: absolute;
  right: 0%;
  top: -5%;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ backgroundImage }): string => backgroundImage});
  z-index: -1;

  @media ${device.mobileL} {
    right: 0%;
    top: -14%;
  }

  @media ${device.mobileM} {
    right: -50%;
    top: -12%;
  }
`;

const BorderImageSkillset = (): JSX.Element => (
  <StyledBorderImageSkillset backgroundImage={bkImage} />
);

export default BorderImageSkillset;
