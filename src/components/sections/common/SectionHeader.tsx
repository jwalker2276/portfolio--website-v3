import React from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import SectionSubTitle from "./SectionSubTitle";

const StyledSectionHeader = styled.header``;

const SectionHeader = (): JSX.Element => (
  <StyledSectionHeader>
    <SectionTitle text="What I Do" />
    <SectionSubTitle text="I create visually appealing apps with clean code." />
  </StyledSectionHeader>
);

export default SectionHeader;
