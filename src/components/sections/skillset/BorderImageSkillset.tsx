import React from "react";
import styled from "styled-components";
import bkImage from "../../../images/three_body.png";

type BorderImageSkillsetProps = {
  backgroundImage: string;
};

const StyledBorderImageSkillset = styled.div<BorderImageSkillsetProps>`
  position: absolute;
  right: -25%;
  top: -10%;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ backgroundImage }): string => backgroundImage});
`;

const BorderImageSkillset = (): JSX.Element => (
  <StyledBorderImageSkillset backgroundImage={bkImage} />
);

export default BorderImageSkillset;
