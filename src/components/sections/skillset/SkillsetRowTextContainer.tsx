import React from "react";
import styled from "styled-components";
import SkillsetRowTextHeading from "./SkillsetRowTextHeading";
import SkillsetRowText from "./SkillsetRowText";

type RowTextContentProps = {
  titleText: string;
  text: string;
};

const StyledSkillsetRowTextContainer = styled.div``;

const SkillsetRowTextContainer = ({
  titleText,
  text,
}: RowTextContentProps): JSX.Element => (
  <StyledSkillsetRowTextContainer>
    <SkillsetRowTextHeading titleText={titleText} />
    <SkillsetRowText text={text} />
  </StyledSkillsetRowTextContainer>
);

export default SkillsetRowTextContainer;
