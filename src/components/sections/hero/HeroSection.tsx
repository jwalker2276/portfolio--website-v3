import React from "react";
import styled from "styled-components";
import PrimaryHeading from "./PrimaryHeading";
import SecondaryHeading from "./SecondaryHeading";
import PrimaryCallToAction from "../../common/buttons/PrimaryCallToAction";

const StyledHeroSection = styled.section``;

const HeroSection = (): JSX.Element => (
  <StyledHeroSection>
    <SecondaryHeading />
    <PrimaryHeading />
    <PrimaryCallToAction />
  </StyledHeroSection>
);

export default HeroSection;
