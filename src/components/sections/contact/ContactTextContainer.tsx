import React from "react";
import styled from "styled-components";
import ContactLinkIcon from "./ContactLinkIcon";
import ContactText from "./ContactText";

type ContactTextContainerProps = {
  shortLink?: string;
  icon: string;
  imageAlt: string;
};

const StyledContactTextContainer = styled.div`
  color: var(--neut--color-000);
  font-weight: 500;
  font-size: 16px;
  width: 100%;
`;
const ContactLinkContainer = ({
  shortLink,
  icon,
  imageAlt,
}: ContactTextContainerProps): JSX.Element => (
  <StyledContactTextContainer>
    <ContactLinkIcon icon={icon} imageAlt={imageAlt} />
    <ContactText text={shortLink} />
  </StyledContactTextContainer>
);

export default ContactLinkContainer;
