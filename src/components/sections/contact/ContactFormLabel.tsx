import React from "react";
import styled from "styled-components";

type ContactFormLabelProps = {
  forValue: string;
  labelText: string;
};

const StyledContactFormLabel = styled.label`
  font-size: 14px;
  font-weight: 500px;
  margin: 0 0 8px 0;
  width: 100%;
  display: block;
  color: var(--neutral-color-000);
`;

const ContactFormLabel = ({
  forValue,
  labelText,
}: ContactFormLabelProps): JSX.Element => (
  <StyledContactFormLabel htmlFor={forValue}>
    {labelText}
  </StyledContactFormLabel>
);

export default ContactFormLabel;
