import React from "react";
import styled from "styled-components";

enum ButtonTypes {
  "button",
  "submit",
  "reset",
  undefined,
}

type ButtonProps = {
  buttonText: string;
  buttonEvent?: () => void;
  buttonType?: ButtonTypes;
};

const StyledPrimaryCallToActionButton = styled.button``;

const PrimaryCallToActionButton = ({
  buttonText,
  buttonEvent,
  ...otherProps
}: ButtonProps): JSX.Element => (
  <StyledPrimaryCallToActionButton onClick={buttonEvent} {...otherProps}>
    {buttonText}
  </StyledPrimaryCallToActionButton>
);

export default PrimaryCallToActionButton;
