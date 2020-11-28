import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../common/Logo";
import MenuButton from "./MenuButton";
import NavActions from "./NavActions";

const StyledNavWrapper = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0px;
`;

const NavWrapper = (): JSX.Element => {
  // State
  const [showNav, toggleShowNav] = useState(false);

  // Toggle Event
  const showNavPanel = (): void => {
    toggleShowNav(!showNav);
  };

  return (
    <StyledNavWrapper id="nav">
      <Logo />
      <MenuButton onClickEvent={showNavPanel} />
      {showNav && <NavActions />}
    </StyledNavWrapper>
  );
};

export default NavWrapper;
