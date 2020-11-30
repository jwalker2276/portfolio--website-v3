import React from "react";
import styled from "styled-components";
import WorkDisplay from "./WorkDisplay";
// Images
import rateTeamMateImage from "../../../images/rtm_ss_1.jpg";
import vindecoderImage from "../../../images/vindecoder_ss_1.jpg";
import downshiftImage from "../../../images/downshift_ss_1.jpg";
import canvasAnimationImage from "../../../images/canvas_animation_ss_1.jpg";
import devlistImage from "../../../images/devlist_ss_1.jpg";
import { device } from "../../../breakpoints";
import useScreenWidth from "../../../customhooks/useScreenWidth";

const StyledPortfolioWorkGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template: 1fr / 1.5fr 1fr;
  grid-gap: 8px;

  @media ${device.tablet} {
    grid-template: 1fr / 1fr;
  }
`;

const StyledPortfolioWorkGridMain = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template: 1fr 1fr / 1fr;
  grid-template-areas:
    "mainOne"
    "mainTwo";
  grid-gap: 8px;

  @media ${device.tablet} {
    min-width: 1px;
    min-height: 1px;
    grid-template: repeat(5, 428px) / 1fr;
    row-gap: 8px;
    column-gap: 0;
  }

  @media ${device.tabletS} {
    grid-template: repeat(5, 345px) / 1fr;
  }

  @media ${device.mobileL} {
    grid-template: repeat(5, 254px) / 1fr;
  }

  @media ${device.mobileM} {
    grid-template: repeat(5, 200px) / 1fr;
  }

  @media ${device.mobileS} {
    grid-template: repeat(5, 170px) / 1fr;
  }
`;

const StyledPortfolioWorkGridOther = styled.div`
  min-width: 343px;
  min-height: 216px;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr;
  grid-template-areas:
    "otherOne"
    "otherTwo"
    "otherThree";
  grid-gap: 8px;

  @media ${device.tablet} {
    min-width: 100%;
    min-height: 100%;
  }
`;

const PortfolioWorkGrid = (): JSX.Element => {
  // Custom hook
  const screenSize = useScreenWidth();

  if (screenSize === "large") {
    return (
      <StyledPortfolioWorkGrid>
        <StyledPortfolioWorkGridMain>
          <WorkDisplay
            imagesource={rateTeamMateImage}
            linkToProject="https://www.teammateme.com/"
            projectName="RateTeamMate"
            projectType="Full Stack Web Application"
            gridArea="mainOne"
          />
          <WorkDisplay
            imagesource={downshiftImage}
            linkToProject="https://downshift-demo.netlify.app"
            linkToCode="https://github.com/jwalker2276/gatsby-site-demo"
            projectName="Downshift"
            projectType="Website"
            gridArea="mainTwo"
          />
        </StyledPortfolioWorkGridMain>
        <StyledPortfolioWorkGridOther>
          <WorkDisplay
            imagesource={vindecoderImage}
            linkToProject="https://www.vindecodeapp.com/"
            linkToCode="https://github.com/jwalker2276/vinDecode"
            projectName="Vindecoder"
            projectType="Web Application"
            gridArea="otherOne"
          />
          <WorkDisplay
            imagesource={devlistImage}
            linkToProject="https://www.devlistapp.com/"
            linkToCode="https://github.com/jwalker2276/devList"
            projectName="DevList"
            projectType="Web Application"
            gridArea="otherTwo"
          />
          <WorkDisplay
            imagesource={canvasAnimationImage}
            linkToProject="https://www.jwalkercreations.com/"
            projectName="Landing Page Animation"
            projectType="Canvas Animation"
            gridArea="otherThree"
          />
        </StyledPortfolioWorkGridOther>
      </StyledPortfolioWorkGrid>
    );
  } else {
    return (
      <StyledPortfolioWorkGrid>
        <StyledPortfolioWorkGridMain>
          <WorkDisplay
            imagesource={rateTeamMateImage}
            linkToProject="https://www.teammateme.com/"
            projectName="RateTeamMate"
            projectType="Full Stack Web Application"
            gridArea="mainOne"
          />
          <WorkDisplay
            imagesource={downshiftImage}
            linkToProject="https://downshift-demo.netlify.app"
            linkToCode="https://github.com/jwalker2276/gatsby-site-demo"
            projectName="Downshift"
            projectType="Website"
            gridArea="mainTwo"
          />
          <WorkDisplay
            imagesource={vindecoderImage}
            linkToProject="https://www.vindecodeapp.com/"
            linkToCode="https://github.com/jwalker2276/vinDecode"
            projectName="Vindecoder"
            projectType="Web Application"
            gridArea="otherOne"
          />
          <WorkDisplay
            imagesource={devlistImage}
            linkToProject="https://www.devlistapp.com/"
            linkToCode="https://github.com/jwalker2276/devList"
            projectName="DevList"
            projectType="Web Application"
            gridArea="otherTwo"
          />
          <WorkDisplay
            imagesource={canvasAnimationImage}
            linkToProject="https://www.jwalkercreations.com/"
            projectName="Landing Page Animation"
            projectType="Canvas Animation"
            gridArea="otherThree"
          />
        </StyledPortfolioWorkGridMain>
      </StyledPortfolioWorkGrid>
    );
  }
};

export default PortfolioWorkGrid;
