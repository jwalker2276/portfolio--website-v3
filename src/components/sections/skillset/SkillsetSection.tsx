import React from "react";
import styled from "styled-components";
import PrimaryCallToActionButton from "../../common/buttons/PrimaryCallToAction";
import SectionHeader from "../common/SectionHeader";
import SkillsetRow from "./SkillsetRow";
import SkillsetRowIconsContainer from "./SkillsetRowIconsContainer";
import SkillsetRowTextContainer from "./SkillsetRowTextContainer";
import BorderImageSkillset from "./BorderImageSkillset";
import { animateScroll } from "react-scroll";
// Icons
import ApplicationIcon from "../../../images/icon-application.svg";
import CodeIcon from "../../../images/icon-code.svg";
import CogIcon from "../../../images/icon-cog.svg";
import PhotoIcon from "../../../images/icon-photo.svg";
import ServerIcon from "../../../images/icon-server.svg";
import SwatchIcon from "../../../images/icon-swatch.svg";
import TuneIcon from "../../../images/icon-tune.svg";
import useScreenWidth from "../../../customhooks/useScreenWidth";

// Content for this section
const rowOneTitle = "Custom Web Application";
const rowOneText =
  "If you need more than a simple website, no problem. I can build web applications to meet the needs of your customers and you.";

const rowTwoTitle = "Unique Web Sites";
const rowTwoText =
  "Want something more unique than most websites, great. I can create optimized websites that make your brand stand out and be recognized.";

const rowThreeTitle = "Feature Development";
const rowThreeText =
  "Already have an existing site but need new features? I can develop new features to work with your existing codebase.";

const StyledSection = styled.section`
  position: relative;
  padding: var(--page--padding);
  padding-bottom: 128px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow-x: hidden;
`;

// Onclick event for button
const primaryActionEvent = (): void => {
  animateScroll.scrollToBottom({ smooth: "easeOutQuint", duration: 250 });
};

const SkillsetSection = (): JSX.Element => {
  // Custom hook
  const screenSize = useScreenWidth(640);

  return (
    <StyledSection id="skillset">
      <BorderImageSkillset />
      <SectionHeader
        titleText="What I Do"
        subTitleText="I create visually appealing apps with clean code."
      />
      <SkillsetRow>
        <SkillsetRowIconsContainer
          largeIcon={CodeIcon}
          smallIcons={[ApplicationIcon, ServerIcon]}
        />
        <SkillsetRowTextContainer titleText={rowOneTitle} text={rowOneText} />
      </SkillsetRow>
      <SkillsetRow>
        {screenSize === "large" && (
          <SkillsetRowTextContainer titleText={rowTwoTitle} text={rowTwoText} />
        )}
        <SkillsetRowIconsContainer
          largeIcon={CodeIcon}
          smallIcons={[SwatchIcon, PhotoIcon]}
        />
        {screenSize === "small" && (
          <SkillsetRowTextContainer titleText={rowTwoTitle} text={rowTwoText} />
        )}
      </SkillsetRow>
      <SkillsetRow>
        <SkillsetRowIconsContainer
          largeIcon={CodeIcon}
          smallIcons={[TuneIcon, CogIcon]}
        />
        <SkillsetRowTextContainer
          titleText={rowThreeTitle}
          text={rowThreeText}
        />
      </SkillsetRow>
      <PrimaryCallToActionButton
        buttonText="Hire me"
        buttonEvent={primaryActionEvent}
      />
    </StyledSection>
  );
};

export default SkillsetSection;
