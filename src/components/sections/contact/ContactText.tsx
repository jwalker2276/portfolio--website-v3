import React from "react";
import styled from "styled-components";

type ContactTextProps = {
  text: string;
};

const StyledContactText = styled.p`
  display: inline-block;
  font-size: 20px;
`;

const ContactText = ({ text }: ContactTextProps): JSX.Element => (
  <StyledContactText>{text}</StyledContactText>
);

export default ContactText;
