import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../common/Logo";
import MenuButton from "./MenuButton";
import NavActions from "./NavActions";

const StyledNavWrapper = styled.header``;

const NavWrapper = (): JSX.Element => {
  // State
  const [showNav, toggleShowNav] = useState(false);

  // Toggle Event
  const showNavPanel = (): void => {
    toggleShowNav(!showNav);
  };

  return (
    <StyledNavWrapper>
      <Logo />
      <MenuButton onClickEvent={showNavPanel} />
      {showNav && <NavActions />}
    </StyledNavWrapper>
  );
};

export default NavWrapper;
