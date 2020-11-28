import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

type NavButtonProps = {
  buttonText: string;
  sectionId: string;
};

const StyledNavButton = styled(Link)`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: var(--neut--color-000);
  font-weight: 500;
  cursor: pointer;
  padding: 4px 0;
  text-decoration: none;
`;

const NavButton = ({ buttonText, sectionId }: NavButtonProps): JSX.Element => (
  <StyledNavButton to={sectionId} smooth="easOutQuart" duration={500}>
    {buttonText}
  </StyledNavButton>
);

export default NavButton;
