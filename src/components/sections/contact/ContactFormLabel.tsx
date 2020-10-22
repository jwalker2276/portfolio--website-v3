import React from "react";
import styled from "styled-components";

type ContactFormLabelProps = {
  forValue: string;
  labelText: string;
};

const StyledContactFormLabel = styled.label``;

const ContactFormLabel = ({
  forValue,
  labelText,
}: ContactFormLabelProps): JSX.Element => (
  <StyledContactFormLabel htmlFor={forValue}>
    {labelText}
  </StyledContactFormLabel>
);

export default ContactFormLabel;
