import React from "react";
import styled from "styled-components";
import MenuButtonAccent from "./MenuButtonAccent";

type MenuButtonProps = {
  onClickEvent: () => void;
};

const StyledMenuButton = styled.button``;

const MenuButton = ({ onClickEvent }: MenuButtonProps): JSX.Element => (
  <>
    <StyledMenuButton onClick={onClickEvent}>Explore</StyledMenuButton>
    <MenuButtonAccent />
  </>
);

export default MenuButton;
