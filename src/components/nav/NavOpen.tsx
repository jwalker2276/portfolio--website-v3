import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import Logo from "../common/Logo";
import NavActions from "./NavActions";
import NavActionsMobile from "./NavActionsMobile";
import useScreenWidth from "../../customhooks/useScreenWidth";

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

const NavOpen = ({ style }: StyleNavOpenProps): JSX.Element => {
  // Custom hook
  const screenSize = useScreenWidth(450);

  return (
    <StyledNavOpen style={style}>
      <Logo />
      {screenSize === "small" && <NavActionsMobile />}
      {screenSize === "large" && <NavActions />}
    </StyledNavOpen>
  );
};

export default NavOpen;
