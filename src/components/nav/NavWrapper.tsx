import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useTransition } from "react-spring";
import NavOpen from "./NavOpen";
import NavClose from "./NavClose";

const StyledNavWrapper = styled.header`
  position: relative;
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0px;
`;

const pages = [
  ({ style }): JSX.Element => <NavClose style={{ ...style }} />,
  ({ style }): JSX.Element => <NavOpen style={{ ...style }} />,
];

const NavWrapper = (): JSX.Element => {
  // React Spring
  const [index, set] = useState(0);
  const onClick = useCallback(() => set((state) => (state + 1) % 2), []);
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(0,100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0%,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-50%,0)" },
  });

  return (
    <StyledNavWrapper id="nav" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item];
        return <Page key={key} style={props} />;
      })}
    </StyledNavWrapper>
  );
};

export default NavWrapper;
