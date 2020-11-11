import React from "react";
import styled from "styled-components";

// Props types
type ParallaxIconContainerProps = {
  children: React.ReactNode;
  offsetX: string;
  offsetY: string;
};

// Styled component wrapper div
const StyledParallaxIconContainer = styled.div<{
  offsetX: string;
  offsetY: string;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(
    ${({ offsetX }): string => offsetX}px,
    ${({ offsetY }): string => offsetY}px
  );
`;

// React Component
const ParallaxIcon = ({
  children,
  offsetX,
  offsetY,
}: ParallaxIconContainerProps): JSX.Element => (
  <StyledParallaxIconContainer offsetX={offsetX} offsetY={offsetY}>
    {children}
  </StyledParallaxIconContainer>
);

export default ParallaxIcon;
