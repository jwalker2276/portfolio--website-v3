import React from "react";
import styled from "styled-components";
import MenuButtonAccent from "./MenuButtonAccent";

const StyledMenuButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
`;

const StyledMenuButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: var(--primary--color-100);
  padding-right: 4px;
  cursor: pointer;
`;

const MenuButton = (): JSX.Element => (
  <StyledMenuButtonWrapper>
    <StyledMenuButton>Explore</StyledMenuButton>
    <MenuButtonAccent />
  </StyledMenuButtonWrapper>
);

export default MenuButton;
