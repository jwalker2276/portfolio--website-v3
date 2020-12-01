import React from "react";
import styled from "styled-components";

const StyledSentButton = styled.button`
  background-color: var(--primary--color-600);
  color: var(--neutral--color-000);
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  width: 96px;
  height: 36px;
  cursor: pointer;
  text-shadow: 0 0 10px var(--neutral--color-900);
`;

const SentButton = (): JSX.Element => (
  <StyledSentButton>Success</StyledSentButton>
);

export default SentButton;
