import React from "react";
import styled from "styled-components";
import SectionHeader from "../common/SectionHeader";
import SectionIntroText from "../common/SectionIntroText";
import PrimaryContactMethod from "./PrimaryContactMethod";
import BackgroundImages from "./BackgroundImages";
import { device } from "../../../breakpoints";

const StyledSectionContact = styled.section`
  position: relative;
  padding: var(--page--padding);
  padding-bottom: 128px;
  width: 100%;
  overflow: hidden;

  @media ${device.tablet} {
    padding-bottom: 64px;
  }
`;

const StyledSectionContactMethods = styled.div`
  width: 100%;
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  align-items: start;
  margin: 128px 0 0 0;

  @media ${device.tablet} {
    grid-template: 1fr / 1fr 1fr;
    margin: 64px 0 0 0;
  }

  @media ${device.tabletS} {
    margin: 0;
    grid-template: auto 1fr / 1fr;
    align-items: center;
  }
`;

const SectionContact = (): JSX.Element => (
  <StyledSectionContact id="contact">
    <BackgroundImages />
    <SectionHeader titleText="Say Hello" subTitleText="Let's Work Together." />
    <SectionIntroText displayText="I'd love to meet with you to discuss your ideas and potential collaborations." />
    <StyledSectionContactMethods>
      <PrimaryContactMethod />
    </StyledSectionContactMethods>
  </StyledSectionContact>
);

export default SectionContact;
