import React from "react";
import styled from "styled-components";
import PrimaryCallToActionButton from "../../common/buttons/PrimaryCallToAction";
import SectionHeader from "../common/SectionHeader";
import PortfolioWorkDisplay from "./PortfolioWorkDisplay";

const StyledPortfolioSection = styled.section`
  padding: var(--page--padding);
  padding-bottom: 128px;
  width: 100%;
  max-height: 768px;
  overflow: hidden;
  display: grid;
  grid-template: auto 1fr auto;
`;

// Onclick event for button
const primaryActionEvent = (): void => {
  console.log("Clicked resume");
};

const PortfolioSection = (): JSX.Element => (
  <StyledPortfolioSection>
    <SectionHeader
      titleText="Portfolio"
      subTitleText="See what I have already built."
    />
    <PortfolioWorkDisplay />
    <PrimaryCallToActionButton
      buttonText="Resume"
      buttonEvent={primaryActionEvent}
    />
  </StyledPortfolioSection>
);

export default PortfolioSection;
