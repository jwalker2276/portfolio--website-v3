import React from "react";
import styled from "styled-components";
import PrimaryCallToActionButton from "../../common/buttons/PrimaryCallToAction";
import SectionHeader from "../common/SectionHeader";
import PortfolioWorkDisplay from "./PortfolioWorkDisplay";

const StyledPortfolioSection = styled.section``;

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
