import React from "react";
import styled from "styled-components";
import Logo from "../common/Logo";
import MenuButton from "./MenuButton";

const StyledNavWrapper = styled.header``;

const NavWrapper = (): JSX.Element => (
  <StyledNavWrapper>
    <Logo />
    <MenuButton />
  </StyledNavWrapper>
);

export default NavWrapper;
