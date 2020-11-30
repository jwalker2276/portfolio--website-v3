import React from "react";
import styled from "styled-components";
import { animateScroll } from "react-scroll";
import { device } from "../../../breakpoints";
import PrimaryHeading from "./PrimaryHeading";
import SecondaryHeading from "./SecondaryHeading";
import PrimaryCallToAction from "../../common/buttons/PrimaryCallToAction";
import BackgroundImageHero from "./BackgroundImageHero";
import BorderImageHero from "./BorderImageHero";
import bkImage from "../../../images/hero_bk.png";

type HeroSectionProps = {
  backgroundImage: string;
};

const StyledHeroSection = styled.section<HeroSectionProps>`
  padding: var(--page--padding);
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${({ backgroundImage }): string => backgroundImage});
    z-index: -1;
  }
`;

const StyledLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 85px;

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
  <StyledHeroSection id="hero" backgroundImage={bkImage}>
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
