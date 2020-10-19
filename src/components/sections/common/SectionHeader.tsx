import React from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import SectionSubTitle from "./SectionSubTitle";

type SectionHeaderProps = {
  titleText: string;
  subTitleText: string;
};

const StyledSectionHeader = styled.header``;

const SectionHeader = ({
  titleText,
  subTitleText,
}: SectionHeaderProps): JSX.Element => (
  <StyledSectionHeader>
    <SectionTitle text={titleText} />
    <SectionSubTitle text={subTitleText} />
  </StyledSectionHeader>
);

export default SectionHeader;
