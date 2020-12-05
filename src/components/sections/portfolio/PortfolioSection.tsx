import React from "react";
import styled from "styled-components";
import { device } from "../../../breakpoints";
import PrimaryCallToActionButton from "../../common/buttons/PrimaryCallToAction";
import SectionHeader from "../common/SectionHeader";
import PortfolioWorkDisplay from "./PortfolioWorkDisplay";

const StyledPortfolioSection = styled.section`
  padding: var(--page--padding);
  padding-bottom: 128px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: auto 1fr auto / 1fr;
  overflow-x: hidden;

  @media ${device.tablet} {
    padding-bottom: 64px;
  }
`;

const StyledButtonWrapper = styled.div`
  margin-top: 79px;
  justify-self: center;
`;

const PortfolioSection = (): JSX.Element => (
  <StyledPortfolioSection id="portfolio">
    <SectionHeader
      titleText="Portfolio"
      subTitleText="See what I have already built."
    />
    <PortfolioWorkDisplay />
    <StyledButtonWrapper>
      <PrimaryCallToActionButton buttonText="Linkedin" buttonType="link" />
    </StyledButtonWrapper>
  </StyledPortfolioSection>
);

export default PortfolioSection;
