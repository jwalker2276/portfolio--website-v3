import React from "react";
import styled from "styled-components";
import { animateScroll } from "react-scroll";
import { device } from "../../../breakpoints";
import PrimaryHeading from "./PrimaryHeading";
import SecondaryHeading from "./SecondaryHeading";
import PrimaryCallToAction from "../../common/buttons/PrimaryCallToAction";
import BackgroundImageHero from "./BackgroundImageHero";
import BorderImageHero from "./BorderImageHero";

const StyledHeroSection = styled.section`
  padding: var(--page--padding);
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }
`;

const StyledLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  @media ${device.tabletS} {
    padding: 0 24px;
  }
`;

const StyledRightDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media ${device.tabletS} {
    display: none;
  }
`;

// Onclick event for button
const primaryActionEvent = (): void => {
  animateScroll.scrollToBottom({ smooth: "easeOutQuint", duration: 250 });
};

const HeroSection = (): JSX.Element => (
  <StyledHeroSection id="hero">
    {/* <BorderImageHero /> */}
    <StyledLeftDiv>
      <SecondaryHeading />
      <PrimaryHeading />
      <PrimaryCallToAction
        buttonText="Let's talk"
        buttonEvent={primaryActionEvent}
      />
    </StyledLeftDiv>
    <StyledRightDiv>{/* <BackgroundImageHero /> */}</StyledRightDiv>
  </StyledHeroSection>
);

export default HeroSection;
