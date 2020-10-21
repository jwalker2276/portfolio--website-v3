import React from "react";
import styled from "styled-components";

type SectionIntoTextProps = {
  displayText: string;
};

const StyledSectionIntroText = styled.p``;

const SectionIntroText = ({
  displayText,
}: SectionIntoTextProps): JSX.Element => (
  <StyledSectionIntroText>{displayText}</StyledSectionIntroText>
);

export default SectionIntroText;
