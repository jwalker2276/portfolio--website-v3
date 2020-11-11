import React from "react";
import styled from "styled-components";

type NavButtonProps = {
  buttonText: string;
};

const StyledNavButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: var(--neut--color-000);
  font-weight: 500;
  cursor: pointer;
  padding: 4px 0;
`;

const NavButton = ({ buttonText }: NavButtonProps): JSX.Element => (
  <StyledNavButton>{buttonText}</StyledNavButton>
);

export default NavButton;
