import React from "react";
import styled from "styled-components";

type NavButtonProps = {
  buttonText: string;
};

const StyledNavButton = styled.button``;

const NavButton = ({ buttonText }: NavButtonProps): JSX.Element => (
  <StyledNavButton>{buttonText}</StyledNavButton>
);

export default NavButton;
