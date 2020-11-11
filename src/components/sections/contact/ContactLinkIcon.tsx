import React from "react";
import styled from "styled-components";

type ContactLinkIconProps = {
  icon: string;
  imageAlt: string;
};

const StyledContactLinkIcon = styled.img`
  margin-right: 48px;
  width: 24px;
  height: auto;
`;

const ContactLinkIcon = ({
  icon,
  imageAlt,
}: ContactLinkIconProps): JSX.Element => (
  <StyledContactLinkIcon src={icon} alt={imageAlt} />
);

export default ContactLinkIcon;
