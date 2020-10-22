import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";

const StyledSecondaryContactMethod = styled.div``;

const SecondaryContactMethod = (): JSX.Element => (
  <StyledSecondaryContactMethod>
    <ContactForm />
  </StyledSecondaryContactMethod>
);

export default SecondaryContactMethod;
