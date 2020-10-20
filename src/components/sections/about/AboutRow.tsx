import React from "react";
import styled from "styled-components";

type AboutSectionRowProps = {
  children: React.ReactNode;
};

const StyledAboutRow = styled.div``;

const AboutRow = ({ children }: AboutSectionRowProps): JSX.Element => (
  <StyledAboutRow>{children}</StyledAboutRow>
);

export default AboutRow;
