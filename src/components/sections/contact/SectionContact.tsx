import React from "react";
import styled from "styled-components";
import SectionHeader from "../common/SectionHeader";
import SectionIntroText from "../common/SectionIntroText";
import PrimaryContactMethod from "./PrimaryContactMethod";
import BackgroundImages from "./BackgroundImages";

const StyledSectionContact = styled.section`
  position: relative;
  padding: var(--page--padding);
  padding-bottom: 128px;
  width: 100%;
`;

const SectionContact = (): JSX.Element => (
  <StyledSectionContact>
    <BackgroundImages />
    <SectionHeader titleText="Say Hello" subTitleText="Let's Work Together." />
    <SectionIntroText displayText="I'd love to meet with you to discuss your ideas and potential collaborations." />
    <PrimaryContactMethod />
  </StyledSectionContact>
);

export default SectionContact;
