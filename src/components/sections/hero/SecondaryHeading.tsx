import React from "react";
import styled from "styled-components";
import LineAccent from "../../common/LineAccent";

const StyledSecondaryHeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 0 0 12px 0;
`;

const StyledSecondaryHeading = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: var(--primary--color-100);
  margin-left: 8px;
`;

const SecondaryHeading = (): JSX.Element => (
  <StyledSecondaryHeadingWrapper>
    <LineAccent />
    <StyledSecondaryHeading>Jordan Walker</StyledSecondaryHeading>
  </StyledSecondaryHeadingWrapper>
);

export default SecondaryHeading;
