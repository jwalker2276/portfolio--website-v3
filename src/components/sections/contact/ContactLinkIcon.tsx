import React from "react";
import styled from "styled-components";
import { device } from "../../../breakpoints";

type ContactLinkIconProps = {
  icon: string;
  imageAlt: string;
};

const StyledContactLinkIcon = styled.img`
  margin-right: 48px;
  width: 24px;
  height: auto;

  @media ${device.tablet} {
    width: 18px;
    margin-right: 36px;
  }
`;

const ContactLinkIcon = ({
  icon,
  imageAlt,
}: ContactLinkIconProps): JSX.Element => (
  <StyledContactLinkIcon src={icon} alt={imageAlt} width="24px" height="24px" />
);

export default ContactLinkIcon;
