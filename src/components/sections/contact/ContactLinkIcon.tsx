import React from "react";
import styled from "styled-components";

type ContactLinkIconProps = {
  icon: string;
  imageAlt: string;
};

const StyledContactLinkIcon = styled.img``;

const ContactLinkIcon = ({
  icon,
  imageAlt,
}: ContactLinkIconProps): JSX.Element => (
  <StyledContactLinkIcon src={icon} alt={imageAlt} />
);

export default ContactLinkIcon;
