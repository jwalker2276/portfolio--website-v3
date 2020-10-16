import React from "react";
import styled from "styled-components";

type SectionSubTitleProps = {
  text: string;
};

const StyledSectionSubTitle = styled.h4``;

const SectionSubTitle = ({ text }: SectionSubTitleProps): JSX.Element => (
  <StyledSectionSubTitle>{text}</StyledSectionSubTitle>
);

export default SectionSubTitle;
