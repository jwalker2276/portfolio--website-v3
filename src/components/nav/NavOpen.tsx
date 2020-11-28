import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import Logo from "../common/Logo";
import NavActions from "./NavActions";

type StyleNavOpenProps = {
  style: React.CSSProperties;
};

const StyledNavOpen = styled(animated.div)`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0px;
  will-change: transform, opaction;
`;

const NavOpen = ({ style }: StyleNavOpenProps): JSX.Element => (
  <StyledNavOpen style={style}>
    <Logo />
    <NavActions />
  </StyledNavOpen>
);

export default NavOpen;
