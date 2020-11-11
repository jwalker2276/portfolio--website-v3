import React from "react";
import styled from "styled-components";
import { useSpring } from "react-spring";
import SectionHeader from "../common/SectionHeader";
import AboutRow from "./AboutRow";
import AboutRowIconsContainer from "./AboutRowIconsContainer";
import AboutRowText from "./AboutRowText";
import PrimaryCallToActionButton from "../../common/buttons/PrimaryCallToAction";
import SectionIntroText from "../common/SectionIntroText";
import ParallaxIconContainer from "./ParallaxIconContainer";
import AnimatedDiv from "./AnimatedDiv";
// Icon files
import IconCodeTop from "../../../images/code_icon_top.svg";
import IconCodeMid from "../../../images/code_icon_mid.svg";
import IconCodeBottom from "../../../images/code_icon_bottom.svg";

import IconEleTop from "../../../images/ele_icon_top.svg";
import IconEleMid from "../../../images/ele_icon_mid.svg";
import IconEleBottom from "../../../images/ele_icon_bottom.svg";

import IconBoxesTop from "../../../images/boxes_icon_top.svg";
import IconBoxesBottom from "../../../images/boxes_icon_bottom.svg";

import IconGearsTop from "../../../images/gears_icon_top.svg";
import IconGearsBottom from "../../../images/gears_icon_bottom.svg";

const infoOne =
  "I strive to create interesting and attractive front-end assets following a component-based approach. I’m constantly researching new technologies, best practices, and techniques to tune my products for the target audience. As for technologies, I work with a variety of tools that allow me to swiftly engineer assets for your project.";

const infoTwo =
  "My knowledge of back-end development allows me to build APIs, databases, and other server-side related features. These techniques help me create full applications that not only handle a vast amount of data but are able to serve it in a secure, optimized way.";

// Onclick event for button
const primaryActionEvent = (): void => {
  console.log("Clicked hire me");
};

const StyledAboutSection = styled.section`
  padding: var(--page--padding);
  padding-bottom: 128px;
  width: 100%;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// For animations
const calc = (x: number, y: number): number[] => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];

// React spring functions
const transTop = (x: number, y: number): string =>
  `translate3d(${x / 5}px,${y / 5}px,0)`;

const transMid = (x: number, y: number): string =>
  `translate3d(${x / 7}px,${y / 7}px, 0)`;

const transBottom = (x: number, y: number): string =>
  `translate3d(${x / 10}px,${y / 10}px,0)`;

//* Component
const AboutSection = (): JSX.Element => {
  // React spring data
  const [properties, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 100, tension: 1550, friction: 500 },
  }));

  return (
    <StyledAboutSection
      onMouseMove={({ clientX: x, clientY: y }): void =>
        set({ xy: calc(x, y) })
      }
    >
      <SectionHeader
        titleText="Who I am"
        subTitleText="About my craft and knowledge."
      />
      <SectionIntroText displayText="I'm passionate about creating interesting web assets with a strong emphasis on clean code." />
      <AboutRow>
        <AboutRowIconsContainer>
          <ParallaxIconContainer offsetX="-75" offsetY="-50">
            <AnimatedDiv
              transformFunc={transTop}
              bkgimg={IconEleBottom}
              properties={properties}
              eleheight="250"
              elewidth="250"
            />
            <AnimatedDiv
              transformFunc={transMid}
              bkgimg={IconEleMid}
              properties={properties}
              eleheight="250"
              elewidth="250"
            />
            <AnimatedDiv
              transformFunc={transBottom}
              bkgimg={IconEleTop}
              properties={properties}
              eleheight="250"
              elewidth="250"
            />
          </ParallaxIconContainer>
          <ParallaxIconContainer offsetX="0" offsetY="0">
            <AnimatedDiv
              transformFunc={transTop}
              bkgimg={IconCodeBottom}
              properties={properties}
              eleheight="250"
              elewidth="250"
            />
            <AnimatedDiv
              transformFunc={transMid}
              bkgimg={IconCodeMid}
              properties={properties}
              eleheight="250"
              elewidth="250"
            />
            <AnimatedDiv
              transformFunc={transBottom}
              bkgimg={IconCodeTop}
              properties={properties}
              eleheight="250"
              elewidth="250"
            />
          </ParallaxIconContainer>
        </AboutRowIconsContainer>
        <AboutRowText textToDisplay={infoOne} />
      </AboutRow>
      <AboutRow>
        <AboutRowText textToDisplay={infoTwo} />
        <AboutRowIconsContainer>
          <ParallaxIconContainer offsetX="-75" offsetY="-50">
            <AnimatedDiv
              transformFunc={transTop}
              bkgimg={IconBoxesBottom}
              properties={properties}
              eleheight="250"
              elewidth="250"
            />

            <AnimatedDiv
              transformFunc={transBottom}
              bkgimg={IconBoxesTop}
              properties={properties}
              eleheight="250"
              elewidth="250"
            />
          </ParallaxIconContainer>
          <ParallaxIconContainer offsetX="0" offsetY="0">
            <AnimatedDiv
              transformFunc={transTop}
              bkgimg={IconGearsBottom}
              properties={properties}
              eleheight="250"
              elewidth="250"
            />

            <AnimatedDiv
              transformFunc={transBottom}
              bkgimg={IconGearsTop}
              properties={properties}
              eleheight="250"
              elewidth="250"
            />
          </ParallaxIconContainer>
        </AboutRowIconsContainer>
      </AboutRow>
      <StyledButtonWrapper>
        <PrimaryCallToActionButton
          buttonText="Hire Me"
          buttonEvent={primaryActionEvent}
        />
      </StyledButtonWrapper>
    </StyledAboutSection>
  );
};

export default AboutSection;
