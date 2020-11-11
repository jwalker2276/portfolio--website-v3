import React from "react";
import styled from "styled-components";

const StyledBackToTopAction = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: var(--neut--color-000);
  font-weight: 500;
  cursor: pointer;
  padding: 4px 0;
`;

const scrollToTop = (): void => {
  console.log("scrolling to top");
};

const BackToTopAction = (): JSX.Element => (
  <StyledBackToTopAction onClick={scrollToTop}>
    Back to top
  </StyledBackToTopAction>
);

export default BackToTopAction;
