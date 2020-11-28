import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import Logo from "../common/Logo";
import MenuButton from "./MenuButton";

type NavCloseProps = {
  style: React.CSSProperties;
};

const StyledNavClose = styled(animated.div)`
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0px;
  cursor: pointer;
  position: absolute;
  will-change: transform, opaction;
`;

const NavClose = ({ style }: NavCloseProps): JSX.Element => (
  <StyledNavClose style={style}>
    <Logo />
    <MenuButton />
  </StyledNavClose>
);

export default NavClose;
