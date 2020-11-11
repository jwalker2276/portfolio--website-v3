import React from "react";
import styled from "styled-components";

type AboutSectionRowProps = {
  children: React.ReactNode;
};

const StyledAboutRow = styled.div`
  display: grid;
  grid-template: 384px / 1fr 1fr;
  column-gap: 128px;
  justify-items: center;
  align-items: center;
  margin: 96px 0;
`;

const AboutRow = ({ children }: AboutSectionRowProps): JSX.Element => (
  <StyledAboutRow>{children}</StyledAboutRow>
);

export default AboutRow;
