import React from "react";
import styled from "styled-components";

type SectionTitleProps = {
  text: string;
};

const StyledSectionTitle = styled.h3``;

const SectionTitle = ({ text }: SectionTitleProps): JSX.Element => (
  <StyledSectionTitle>{text}</StyledSectionTitle>
);

export default SectionTitle;
