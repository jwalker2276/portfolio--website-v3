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

const StyledPrimaryContactMethod = styled.div``;

const PrimaryContactMethod = (): JSX.Element => (
  <StyledPrimaryContactMethod>
    <ContactLinkContainer
      icon={LinkedInIcon}
      imageAlt="Linkedin Profile"
      link={linkedin}
      shortLink="jordan-walker-85246458"
    />
    <ContactLinkContainer
      icon={GithubIcon}
      imageAlt="Github Profile"
      link={github}
      shortLink="github.com/jwalker2276"
    />
    <ContactLinkContainer
      icon={EmailIcon}
      imageAlt="Email Address"
      link={email}
    />
  </StyledPrimaryContactMethod>
);

export default PrimaryContactMethod;
