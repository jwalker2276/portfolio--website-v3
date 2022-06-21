import React from "react";
import styled from "styled-components";

type ButtonProps = {
  buttonText: string;
  buttonEvent?: () => void;
  buttonType?: string;
};

const StyledPrimaryCallToActionButton = styled.button`
  background-color: var(--primary--color-600);
  color: var(--neutral--color-000);
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  width: 140px;
  height: 36px;
  cursor: pointer;
  text-shadow: 0 0 10px var(--neutral--color-900);
  z-index: 10;
  transition: transform 0.1s ease-in;

  &:hover {
    transform: translateY(-4px);
  }

  &:hover svg {
    transform: rotate(360deg);
  }
`;

const StyledPrimaryCallToActionLink = styled.a`
  background-color: var(--primary--color-600);
  color: var(--neutral--color-000);
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  width: 140px;
  height: 36px;
  padding: 10px 12px;
  cursor: pointer;
  text-decoration: none;
  text-shadow: 0 0 10px var(--neutral--color-900);
  z-index: 10;
  transition: transform 0.1s ease-in;

  &:hover svg {
    transform: rotate(360deg);
  }
`;

const StyledButtonArrow = styled.svg`
  width: 12px;
  height: 8px;
  fill: var(--primary--color-100);
  margin-left: 8px;
  transition: all 0.2s ease-in-out;
`;

const PrimaryCallToActionButton = ({
  buttonText,
  buttonEvent,
  buttonType,
  ...otherProps
}: ButtonProps): JSX.Element => {
  if (buttonType === "link") {
    return (
      <StyledPrimaryCallToActionLink
        href="https://www.linkedin.com/in/jordan-walker-85246458/"
        rel="noreferrer nopener"
        target="_blank"
        {...otherProps}
      >
        {buttonText}
        <StyledButtonArrow
          viewBox="0 0 12 8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464466C7.97631 0.269204 7.65973 0.269204 7.46447 0.464466C7.2692 0.659728 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM0 4.5H11V3.5H0V4.5Z" />
        </StyledButtonArrow>
      </StyledPrimaryCallToActionLink>
    );
  } else {
    return (
      <StyledPrimaryCallToActionButton onClick={buttonEvent} {...otherProps}>
        {buttonText}
        <StyledButtonArrow
          viewBox="0 0 12 8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464466C7.97631 0.269204 7.65973 0.269204 7.46447 0.464466C7.2692 0.659728 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM0 4.5H11V3.5H0V4.5Z" />
        </StyledButtonArrow>
      </StyledPrimaryCallToActionButton>
    );
  }
};

export default PrimaryCallToActionButton;
