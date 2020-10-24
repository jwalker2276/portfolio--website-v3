import React from "react";
import styled from "styled-components";

type SectionSubTitleProps = {
  text: string;
};

const StyledSectionSubTitle = styled.h4`
  font-size: 36px;
  color: var(--neutral--color-000);
  font-weight: 600;
  max-width: 363px;
`;

const SectionSubTitle = ({ text }: SectionSubTitleProps): JSX.Element => (
  <StyledSectionSubTitle>{text}</StyledSectionSubTitle>
);

export default SectionSubTitle;
