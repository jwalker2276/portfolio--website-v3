import React from "react";
import styled from "styled-components";
import BlackHoleAnimation from "./BlackHoleAnimation";

const StyledBlackHoleAnimationWrapper = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  border: 2px solid red;
  width: 100%;
  height: 100%;
`;

const BlackHoleAnimationWrapper = () => {
  return (
    <StyledBlackHoleAnimationWrapper>
      <BlackHoleAnimation />
    </StyledBlackHoleAnimationWrapper>
  );
};

export default BlackHoleAnimationWrapper;
