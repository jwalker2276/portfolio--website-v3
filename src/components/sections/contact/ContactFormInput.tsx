import React from "react";
import styled from "styled-components";

type ContactFormInputProps = {
  inputType: string;
  inputName: string;
  inputOnChangeEvent: (e: React.FormEvent<HTMLInputElement>) => void;
  inputValue: string;
  placeholderText: string;
};

const StyledContactFormInput = styled.input``;

const ContactFormInput = ({
  inputType,
  inputName,
  inputOnChangeEvent,
  inputValue,

  placeholderText,
}: ContactFormInputProps): JSX.Element => (
  <StyledContactFormInput
    type={inputType}
    name={inputName}
    onChange={inputOnChangeEvent}
    value={inputValue}
    required
    placeholder={placeholderText}
  />
);

export default ContactFormInput;