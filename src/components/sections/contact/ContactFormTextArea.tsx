import React from "react";
import styled from "styled-components";

type ContactFormTextAreaProps = {
  inputName: string;
  inputOnChangeEvent: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  inputValue: string;
  placeholderText: string;
};

const StyledContactFormTextArea = styled.textarea``;

const ContactFormTextArea = ({
  inputName,
  inputOnChangeEvent,
  inputValue,
  placeholderText,
}: ContactFormTextAreaProps): JSX.Element => (
  <StyledContactFormTextArea
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
