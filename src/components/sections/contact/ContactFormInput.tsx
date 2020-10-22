import React from "react";
import styled from "styled-components";

type ContactFormInputProps = {
  inputType: string;
  inputName: string;
  inputOnChangeEvent: () => void;
  inputValue: string;
  required?: boolean;
  placeholderText: string;
};

const StyledContactFormInput = styled.input``;

const ContactFormInput = ({
  inputType,
  inputName,
  inputOnChangeEvent,
  inputValue,
  required,
  placeholderText,
}: ContactFormInputProps): JSX.Element => (
  <StyledContactFormInput
    type={inputType}
    name={inputName}
    onChange={inputOnChangeEvent}
    value={inputValue}
    required={required ?? false}
    placeholder={placeholderText}
  ></StyledContactFormInput>
);

export default ContactFormInput;
