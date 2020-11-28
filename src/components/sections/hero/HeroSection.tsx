import React from "react";
import styled from "styled-components";
import { animateScroll } from "react-scroll";
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
`;

const StyledLeftDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const StyledRightDiv = styled.div`
  width: 100%;
  height: 100%;
`;

// Onclick event for button
const primaryActionEvent = (): void => {
  animateScroll.scrollToBottom({ smooth: "easeOutQuint", duration: 250 });
};

const HeroSection = (): JSX.Element => (
  <StyledHeroSection id="hero">
    <BorderImageHero />
    <StyledLeftDiv>
      <SecondaryHeading />
      <PrimaryHeading />
      <PrimaryCallToAction
        buttonText="Let's talk"
        buttonEvent={primaryActionEvent}
      />
    </StyledLeftDiv>
    <StyledRightDiv>
      <BackgroundImageHero />
    </StyledRightDiv>
  </StyledHeroSection>
);

export default HeroSection;
