import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";

const StyledSecondaryContactMethod = styled.div`
  width: 100%;
  height: 100%;
`;

const SecondaryContactMethod = (): JSX.Element => (
  <StyledSecondaryContactMethod>
    <ContactForm />
  </StyledSecondaryContactMethod>
);

export default SecondaryContactMethod;
