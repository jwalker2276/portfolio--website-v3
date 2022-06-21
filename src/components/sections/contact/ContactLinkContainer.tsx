import React from "react";
import styled from "styled-components";
import ContactLinkIcon from "./ContactLinkIcon";
import ContactLinkText from "./ContactLinkText";

type ContactLinkContainerProps = {
  shortLink?: string;
  icon: string;
  imageAlt: string;
  link: string;
};

const StyledContactLinkContainer = styled.a`
  text-decoration: none;
  color: var(--neut--color-000);
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--primary--color-600);
  }
`;
const ContactLinkContainer = ({
  shortLink,
  icon,
  imageAlt,
  link,
}: ContactLinkContainerProps): JSX.Element => (
  <StyledContactLinkContainer
    href={link}
    rel="noreferrer nopener"
    target="_blank"
  >
    <ContactLinkIcon icon={icon} imageAlt={imageAlt} />
    <ContactLinkText shortLink={shortLink} link={link} />
  </StyledContactLinkContainer>
);

export default ContactLinkContainer;
