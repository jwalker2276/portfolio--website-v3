import React from "react";
import styled from "styled-components";

type ContactFormTextAreaProps = {
  idName: string;
  inputName: string;
  inputOnChangeEvent: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  inputValue: string;
  placeholderText: string;
};

const StyledContactFormTextArea = styled.textarea`
  display: block;
  background-color: var(--neutral--color-800);
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 192px;
  font-size: 16px;
  margin: 0 0 24px 0;
  padding: 8px;
  color: var(--neutral--color-000);
`;

const ContactFormTextArea = ({
  idName,
  inputName,
  inputOnChangeEvent,
  inputValue,
  placeholderText,
}: ContactFormTextAreaProps): JSX.Element => (
  <StyledContactFormTextArea
    id={idName}
    rows={5}
    cols={33}
    name={inputName}
    onChange={inputOnChangeEvent}
    value={inputValue}
    required
    placeholder={placeholderText}
  />
);

export default ContactFormTextArea;
