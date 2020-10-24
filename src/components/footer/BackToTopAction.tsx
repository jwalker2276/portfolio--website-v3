import React from "react";
import styled from "styled-components";

const StyledBackToTopAction = styled.button``;

const scrollToTop = (): void => {
  console.log("scrolling to top");
};

const BackToTopAction = (): JSX.Element => (
  <StyledBackToTopAction onClick={scrollToTop}>
    Back to top
  </StyledBackToTopAction>
);

export default BackToTopAction;
