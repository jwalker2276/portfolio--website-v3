import React from "react";
import styled from "styled-components";
import LineAccent from "../../common/LineAccent";

type SectionTitleProps = {
  text: string;
};

const StyledHeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 0 0 12px 0;
`;

const StyledSectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: var(--primary--color-100);
  margin-left: 8px;
`;

const SectionTitle = ({ text }: SectionTitleProps): JSX.Element => (
  <StyledHeadingWrapper>
    <LineAccent />
    <StyledSectionTitle>{text}</StyledSectionTitle>
  </StyledHeadingWrapper>
);

export default SectionTitle;
