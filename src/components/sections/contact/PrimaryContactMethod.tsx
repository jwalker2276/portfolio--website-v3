import React from "react";
import styled from "styled-components";
// Icons
import LinkedInIcon from "../../../images/icon-linkedin.svg";
import GithubIcon from "../../../images/icon-github.svg";
import EmailIcon from "../../../images/icon-email.svg";
import ContactLinkContainer from "./ContactLinkContainer";

// Links
const linkedin = "https://www.linkedin.com/in/jordan-walker-85246458/";
const github = "https://github.com/jwalker2276";
const email = "jwalkercreations@gmail.com";

const StyledPrimaryContactMethod = styled.div`
  margin: 128px 0 0 0;
  display: grid;
  grid-template: repeat(3, 1fr) / 1fr;
  justify-items: left;
  align-items: center;
  row-gap: 64px;
  width: 192px;
`;

const PrimaryContactMethod = (): JSX.Element => (
  <StyledPrimaryContactMethod>
    <ContactLinkContainer
      icon={LinkedInIcon}
      imageAlt="Linkedin Profile"
      link={linkedin}
      shortLink="Linkedin"
    />
    <ContactLinkContainer
      icon={GithubIcon}
      imageAlt="Github Profile"
      link={github}
      shortLink="Github"
    />
    <ContactLinkContainer
      icon={EmailIcon}
      imageAlt="Email Address"
      link={email}
      shortLink="Email"
    />
  </StyledPrimaryContactMethod>
);

export default PrimaryContactMethod;
