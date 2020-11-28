import React from "react";
import styled from "styled-components";
import SectionHeader from "../common/SectionHeader";
import SectionIntroText from "../common/SectionIntroText";
import PrimaryContactMethod from "./PrimaryContactMethod";
import SecondaryContactMethod from "./SecondaryContactMethod";
import BackgroundImages from "./BackgroundImages";

const StyledSectionContact = styled.section`
  position: relative;
  padding: var(--page--padding);
  padding-bottom: 128px;
  width: 100%;
`;

const StyledSectionContactMethods = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  align-items: start;
  margin: 128px 0 0 0;
`;

const SectionContact = (): JSX.Element => (
  <StyledSectionContact id="contact">
    <BackgroundImages />
    <SectionHeader titleText="Say Hello" subTitleText="Let's Work Together." />
    <SectionIntroText displayText="I'd love to meet with you to discuss your ideas and potential collaborations." />
    <StyledSectionContactMethods>
      <PrimaryContactMethod />
      <SecondaryContactMethod />
    </StyledSectionContactMethods>
  </StyledSectionContact>
);

export default SectionContact;
