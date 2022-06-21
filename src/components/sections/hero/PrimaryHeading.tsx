import React from "react";
import styled from "styled-components";
import { device } from "../../../breakpoints";

const StyledPrimaryHeading = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: var(--neutral--color-000);
  max-width: 305px;
  margin: 0 0 24px 0;
  letter-spacing: 2px;

  @media ${device.tablet} {
    font-size: 24px;
  }
`;

const PrimaryHeading = (): JSX.Element => (
  <StyledPrimaryHeading>
    Hello, my name&apos;s Jordan. I&apos;m a Full-Stack App Developer.
  </StyledPrimaryHeading>
);

export default PrimaryHeading;
