import React from "react";
import styled from "styled-components";

type ContactLinkTextProps = {
  shortLink?: string;
  link: string;
};

const StyledContactLinkText = styled.p`
  display: inline-block;
  font-size: 20px;
`;

const ContactLinkText = ({
  shortLink,
  link,
}: ContactLinkTextProps): JSX.Element => (
  <StyledContactLinkText>
    {shortLink === undefined ? link : shortLink}
  </StyledContactLinkText>
);

export default ContactLinkText;
