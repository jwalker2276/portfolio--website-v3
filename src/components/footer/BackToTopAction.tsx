import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const StyledBackToTopAction = styled(Link)`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: var(--neut--color-000);
  font-weight: 500;
  cursor: pointer;
  padding: 4px 0;
  text-decoration: none;
`;

const BackToTopAction = (): JSX.Element => (
  <StyledBackToTopAction to="nav" smooth="easeOutQuint" duration={250}>
    Back to top
  </StyledBackToTopAction>
);

export default BackToTopAction;
