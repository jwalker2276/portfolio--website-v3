import React from "react";
import styled from "styled-components";
import Logo from "../common/Logo";
import MenuButton from "./MenuButton";
import NavActions from "./NavActions";

const StyledNavWrapper = styled.header``;

const NavWrapper = (): JSX.Element => (
  <StyledNavWrapper>
    <Logo />
    <MenuButton />
    <NavActions />
  </StyledNavWrapper>
);

export default NavWrapper;
