import React from "react";
import styled from "styled-components";
import { device } from "../../../breakpoints";

type ContactLinkTextProps = {
  shortLink?: string;
  link: string;
};

const StyledContactLinkText = styled.p`
  display: inline-block;
  font-size: 20px;

  @media ${device.tablet} {
    font-size: 16px;
  }
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
