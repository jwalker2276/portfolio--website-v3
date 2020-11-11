import React from "react";
import styled from "styled-components";
import SectionHeader from "../common/SectionHeader";
import SectionIntroText from "../common/SectionIntroText";
import PrimaryContactMethod from "./PrimaryContactMethod";

const StyledSectionContact = styled.section`
  padding: var(--page--padding);
  padding-bottom: 128px;
  width: 100%;
`;

const SectionContact = (): JSX.Element => (
  <StyledSectionContact>
    <SectionHeader titleText="Say Hello" subTitleText="Let's Work Together." />
    <SectionIntroText displayText="I'd love to meet with you to discuss your ideas and potential collaborations." />
    <PrimaryContactMethod />
  </StyledSectionContact>
);

export default SectionContact;
