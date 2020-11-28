import React from "react";
import styled from "styled-components";
import PrimaryHeading from "./PrimaryHeading";
import SecondaryHeading from "./SecondaryHeading";
import PrimaryCallToAction from "../../common/buttons/PrimaryCallToAction";
import BorderImageHero from "./BorderImageHero";
import { animateScroll } from "react-scroll";

import bkImage from "../../../images/hero_bk.png";

type SectionProps = {
  backgroundImage: string;
};

const StyledHeroSection = styled.section<SectionProps>`
  padding: var(--page--padding);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ backgroundImage }): string => backgroundImage});
`;

// Onclick event for button
const primaryActionEvent = (): void => {
  animateScroll.scrollToBottom({ smooth: "easeOutQuint", duration: 250 });
};

const HeroSection = (): JSX.Element => (
  <StyledHeroSection backgroundImage={bkImage} id="hero">
    <BorderImageHero />
    <SecondaryHeading />
    <PrimaryHeading />
    <PrimaryCallToAction
      buttonText="Let's talk"
      buttonEvent={primaryActionEvent}
    />
  </StyledHeroSection>
);

export default HeroSection;
