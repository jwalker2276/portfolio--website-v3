import React from "react";
import styled from "styled-components";

type ContactFormInputProps = {
  idName: string;
  inputType: string;
  inputName: string;
  inputOnChangeEvent: (e: React.FormEvent<HTMLInputElement>) => void;
  inputValue: string;
  placeholderText: string;
};

const StyledContactFormInput = styled.input`
  display: block;
  background-color: var(--neutral--color-800);
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 36px;
  font-size: 16px;
  margin: 0 0 24px 0;
  padding: 8px;
  color: var(--neutral--color-000);
`;

const ContactFormInput = ({
  idName,
  inputType,
  inputName,
  inputOnChangeEvent,
  inputValue,

  placeholderText,
}: ContactFormInputProps): JSX.Element => (
  <StyledContactFormInput
    id={idName}
    type={inputType}
    name={inputName}
    onChange={inputOnChangeEvent}
    value={inputValue}
    required
    placeholder={placeholderText}
  />
);

export default ContactFormInput;
