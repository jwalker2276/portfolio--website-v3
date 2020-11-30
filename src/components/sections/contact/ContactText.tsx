import React from "react";
import styled from "styled-components";
import { device } from "../../../breakpoints";

type ContactTextProps = {
  text: string;
};

const StyledContactText = styled.p`
  display: inline-block;
  font-size: 20px;

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const ContactText = ({ text }: ContactTextProps): JSX.Element => (
  <StyledContactText>{text}</StyledContactText>
);

export default ContactText;
