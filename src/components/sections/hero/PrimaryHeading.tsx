import React from "react";
import styled from "styled-components";

const StyledPrimaryHeading = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: var(--neutral--color-000);
  max-width: 305px;
  margin: 0 0 24px 0;
  letter-spacing: 2px;
`;

const PrimaryHeading = (): JSX.Element => (
  <StyledPrimaryHeading>
    Hello, my name&apos;s Jordan. I&apos;m a Full-Stack Web Developer.
  </StyledPrimaryHeading>
);

export default PrimaryHeading;
