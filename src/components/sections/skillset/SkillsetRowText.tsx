import React from "react";
import styled from "styled-components";

type SkillsetRowTextProps = {
  text: string;
};

const StyledSkillsetRowText = styled.p`
  max-width: 384px;
  line-height: 1.4;
`;

const SkillsetRowText = ({ text }: SkillsetRowTextProps): JSX.Element => (
  <StyledSkillsetRowText>{text}</StyledSkillsetRowText>
);

export default SkillsetRowText;
