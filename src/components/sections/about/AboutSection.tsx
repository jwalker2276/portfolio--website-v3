import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring } from "react-spring";
import SectionHeader from "../common/SectionHeader";
import AboutRow from "./AboutRow";
import AboutRowIconsContainer from "./AboutRowIconsContainer";
import AboutRowStaticIcons from "./AboutRowStaticIcons";
import AboutRowText from "./AboutRowText";
import PrimaryCallToActionButton from "../../common/buttons/PrimaryCallToAction";
import SectionIntroText from "../common/SectionIntroText";
import ParallaxIconContainer from "./ParallaxIconContainer";
import AnimatedDiv from "./AnimatedDiv";
import BorderImageAbout from "./BorderImageAbout";
import { animateScroll } from "react-scroll";
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
import useScreenWidth from "../../../customhooks/useScreenWidth";

import StaticIconOne from "../../../images/icon_set_one.svg";
import StaticIconTwo from "../../../images/icon_set_two.svg";
import { device } from "../../../breakpoints";

const infoOne =
  "I strive to create interesting and attractive front-end assets following a component-based approach. I’m constantly researching new technologies, best practices, and techniques to tune my products for the target audience. As for technologies, I work with a variety of tools that allow me to swiftly engineer assets for your project.";

const infoTwo =
  "My knowledge of back-end development allows me to build APIs, databases, and other server-side related features. These techniques help me create full applications that not only handle a vast amount of data but are able to serve it in a secure, optimized way.";

// Onclick event for button
const primaryActionEvent = (): void => {
  animateScroll.scrollToBottom({ smooth: "easeOutQuint", duration: 250 });
};

const StyledAboutSection = styled.section`
  position: relative;
  padding: var(--page--padding);
  padding-bottom: 128px;
  width: 100%;
  overflow-x: hidden;

  @media ${device.tablet} {
    padding-bottom: 64px;
  }
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

  // State
  const [isDeterminingScreenSize, setIsProcessing] = useState(true);

  // Custom hook
  let screenSize = useScreenWidth();

  useEffect(() => {
    if (screenSize) setIsProcessing(false);

    return (): void => {
      setIsProcessing(true);
    };
  }, []);

  if (isDeterminingScreenSize || screenSize === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <StyledAboutSection
      onMouseMove={({ clientX: x, clientY: y }): void =>
        set({ xy: calc(x, y) })
      }
      id="about"
    >
      <BorderImageAbout />
      <SectionHeader
        titleText="Who I am"
        subTitleText="About my craft and knowledge."
      />
      <SectionIntroText displayText="I'm passionate about creating interesting web assets with a strong emphasis on clean code." />
      <AboutRow>
        {screenSize === "large" && (
          <AboutRowIconsContainer>
            <ParallaxIconContainer offsetX="-50" offsetY="25">
              <AnimatedDiv
                transformFunc={transBottom}
                bkgimg={IconEleBottom}
                properties={properties}
                eleheight="150"
                elewidth="150"
              />
              <AnimatedDiv
                transformFunc={transMid}
                bkgimg={IconEleMid}
                properties={properties}
                eleheight="75"
                elewidth="75"
              />
              <AnimatedDiv
                transformFunc={transTop}
                bkgimg={IconEleTop}
                properties={properties}
                eleheight="50"
                elewidth="50"
              />
            </ParallaxIconContainer>
            <ParallaxIconContainer offsetX="50" offsetY="-25">
              <AnimatedDiv
                transformFunc={transBottom}
                bkgimg={IconCodeBottom}
                properties={properties}
                eleheight="150"
                elewidth="150"
              />
              <AnimatedDiv
                transformFunc={transMid}
                bkgimg={IconCodeMid}
                properties={properties}
                eleheight="75"
                elewidth="75"
              />
              <AnimatedDiv
                transformFunc={transTop}
                bkgimg={IconCodeTop}
                properties={properties}
                eleheight="50"
                elewidth="50"
              />
            </ParallaxIconContainer>
          </AboutRowIconsContainer>
        )}
        {screenSize === "small" && (
          <AboutRowStaticIcons imageSource={StaticIconOne} />
        )}
        <AboutRowText textToDisplay={infoOne} />
      </AboutRow>
      <AboutRow>
        {screenSize === "small" && (
          <AboutRowStaticIcons imageSource={StaticIconTwo} />
        )}
        <AboutRowText textToDisplay={infoTwo} />
        {screenSize === "large" && (
          <AboutRowIconsContainer>
            <ParallaxIconContainer offsetX="-50" offsetY="50">
              <AnimatedDiv
                transformFunc={transBottom}
                bkgimg={IconBoxesBottom}
                properties={properties}
                eleheight="150"
                elewidth="150"
              />
              <AnimatedDiv
                transformFunc={transTop}
                bkgimg={IconBoxesTop}
                properties={properties}
                eleheight="75"
                elewidth="75"
              />
            </ParallaxIconContainer>
            <ParallaxIconContainer offsetX="50" offsetY="-50">
              <AnimatedDiv
                transformFunc={transBottom}
                bkgimg={IconGearsBottom}
                properties={properties}
                eleheight="150"
                elewidth="150"
              />
              <AnimatedDiv
                transformFunc={transTop}
                bkgimg={IconGearsTop}
                properties={properties}
                eleheight="75"
                elewidth="75"
              />
            </ParallaxIconContainer>
          </AboutRowIconsContainer>
        )}
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
