import React from "react";
import styled from "styled-components";

type ContactLinkTextProps = {
  shortLink?: string;
  link: string;
};

const StyledContactLinkText = styled.p``;

const ContactLinkText = ({
  shortLink,
  link,
}: ContactLinkTextProps): JSX.Element => (
  <StyledContactLinkText>
    {shortLink === undefined ? link : shortLink}
  </StyledContactLinkText>
);

export default ContactLinkText;
