import React from "react";
import styled from "styled-components";
import PrimaryHeading from "./PrimaryHeading";
import SecondaryHeading from "./SecondaryHeading";
import PrimaryCallToAction from "../../common/buttons/PrimaryCallToAction";

const StyledHeroSection = styled.section``;

// Onclick event for button
const primaryActionEvent = (): void => {
  console.log("Clicked lets talk");
};

const HeroSection = (): JSX.Element => (
  <StyledHeroSection>
    <SecondaryHeading />
    <PrimaryHeading />
    <PrimaryCallToAction
      buttonText="Let's talk"
      buttonEvent={primaryActionEvent}
    />
  </StyledHeroSection>
);

export default HeroSection;
