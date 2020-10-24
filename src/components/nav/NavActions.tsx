import React from "react";
import styled from "styled-components";
import PrimaryContactMethod from "../sections/contact/PrimaryContactMethod";
import NavLinks from "./NavLinks";

const StyledNavActions = styled.div``;

const NavActions = (): JSX.Element => (
  <StyledNavActions>
    <PrimaryContactMethod />
    <NavLinks />
  </StyledNavActions>
);

export default NavActions;
