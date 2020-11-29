import React from "react";
import styled from "styled-components";
import { device } from "../../../breakpoints";

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

  @media ${device.tablet} {
    grid-template: auto 1fr / 1fr;
  }
`;

const AboutRow = ({ children }: AboutSectionRowProps): JSX.Element => (
  <StyledAboutRow>{children}</StyledAboutRow>
);

export default AboutRow;
