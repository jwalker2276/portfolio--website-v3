import React from "react";
import styled from "styled-components";
import PrimaryCallToActionButton from "../../common/buttons/PrimaryCallToAction";
import SectionHeader from "../common/SectionHeader";
import SkillsetRow from "./SkillsetRow";
import SkillsetRowIconsContainer from "./SkillsetRowIconsContainer";
import SkillsetRowTextContainer from "./SkillsetRowTextContainer";
// Icons
import ApplicationIcon from "../../../images/icon-application.svg";
import CodeIcon from "../../../images/icon-code.svg";
import CogIcon from "../../../images/icon-cog.svg";
import PhotoIcon from "../../../images/icon-photo.svg";
import ServerIcon from "../../../images/icon-server.svg";
import SwatchIcon from "../../../images/icon-swatch.svg";
import TuneIcon from "../../../images/icon-tune.svg";

const StyledSection = styled.section``;

// Content for this section
const rowOneTitle = "Custom Web Application";
const rowOneText =
  "If you need more than a smiple website, no problem. I can build web applications to meet the needs of your customers and you.";

const rowTwoTitle = "Unique Web Sites";
const rowTwoText =
  "Want something more unique than most websites, great. I can create optimized websites that make your brand stand out and be recognized.";

const rowThreeTitle = "Feature Development";
const rowThreeText =
  "Already have an existing site but need new features? I can develop new features to work with your existing codebase.";

// Onclick event for button
const primaryActionEvent = (): void => {
  console.log("Clicked hire me");
};

const SkillsetSection = (): JSX.Element => (
  <StyledSection>
    <SectionHeader />
    <SkillsetRow columnSelection="right">
      <SkillsetRowIconsContainer
        largeIcon={CodeIcon}
        smallIcons={[ApplicationIcon, ServerIcon]}
      />
      <SkillsetRowTextContainer titleText={rowOneTitle} text={rowOneText} />
    </SkillsetRow>
    <SkillsetRow columnSelection="left">
      <SkillsetRowIconsContainer
        largeIcon={CodeIcon}
        smallIcons={[SwatchIcon, PhotoIcon]}
      />
      <SkillsetRowTextContainer titleText={rowTwoTitle} text={rowTwoText} />
    </SkillsetRow>
    <SkillsetRow columnSelection="right">
      <SkillsetRowIconsContainer
        largeIcon={CodeIcon}
        smallIcons={[TuneIcon, CogIcon]}
      />
      <SkillsetRowTextContainer titleText={rowThreeTitle} text={rowThreeText} />
    </SkillsetRow>
    <PrimaryCallToActionButton
      buttonText="Hire me"
      buttonEvent={primaryActionEvent}
    />
  </StyledSection>
);

export default SkillsetSection;
