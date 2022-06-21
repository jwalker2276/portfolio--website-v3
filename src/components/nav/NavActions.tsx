import React from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";

const StyledNavActions = styled.div``;

const NavActions = (): JSX.Element => (
  <StyledNavActions>
    <NavLinks variant="top nav" />
  </StyledNavActions>
);

export default NavActions;
