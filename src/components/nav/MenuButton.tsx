import React from "react";
import styled from "styled-components";

type MenuButtonProps = {
  onClickEvent: () => void;
};

const StyledMenuButton = styled.button``;

const MenuButton = ({ onClickEvent }: MenuButtonProps): JSX.Element => (
  <StyledMenuButton onClick={onClickEvent}>Explore</StyledMenuButton>
);

export default MenuButton;
