import React from "react";
import styled from "styled-components";

type ButtonProps = {
  buttonText: string;
  buttonEvent: () => void;
};

const StyledPrimaryCallToActionButton = styled.button``;

const PrimaryCallToActionButton = ({
  buttonText,
  buttonEvent,
}: ButtonProps): JSX.Element => (
  <StyledPrimaryCallToActionButton onClick={buttonEvent}>
    {buttonText}
  </StyledPrimaryCallToActionButton>
);

export default PrimaryCallToActionButton;
