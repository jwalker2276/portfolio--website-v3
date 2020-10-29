import React from "react";
import styled from "styled-components";

type SectionIntoTextProps = {
  displayText: string;
};

const StyledSectionIntroText = styled.p`
  font-size: 16px;
  color: var(--neutral--color-000);
  font-weight: 500;
  max-width: 363px;
`;

const SectionIntroText = ({
  displayText,
}: SectionIntoTextProps): JSX.Element => (
  <StyledSectionIntroText>{displayText}</StyledSectionIntroText>
);

export default SectionIntroText;
