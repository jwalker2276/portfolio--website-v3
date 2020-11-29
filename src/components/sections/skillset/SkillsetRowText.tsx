import React from "react";
import styled from "styled-components";
import { device } from "../../../breakpoints";

type SkillsetRowTextProps = {
  text: string;
};

const StyledSkillsetRowText = styled.p`
  font-size: 16px;
  max-width: 384px;
  line-height: 1.4;

  @media ${device.tablet} {
    max-width: 100%;
  }
`;

const SkillsetRowText = ({ text }: SkillsetRowTextProps): JSX.Element => (
  <StyledSkillsetRowText>{text}</StyledSkillsetRowText>
);

export default SkillsetRowText;
