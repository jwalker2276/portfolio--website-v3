import React from "react";
import styled from "styled-components";

type FooterNavButtonProps = {
  buttonText: string;
};

const StyledFooterNavButton = styled.button``;

const FooterNavButton = ({ buttonText }: FooterNavButtonProps): JSX.Element => (
  <StyledFooterNavButton>{buttonText}</StyledFooterNavButton>
);

export default FooterNavButton;
