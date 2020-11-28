import React from "react";
import styled from "styled-components";
import WorkDisplay from "./WorkDisplay";
// Images
import rateTeamMateImage from "../../../images/rtm_ss_1.png";
import vindecoderImage from "../../../images/vindecoder_ss_1.png";
import downshiftImage from "../../../images/downshift_ss_1.png";
import canvasAnimationImage from "../../../images/canvas_animation_ss_1.png";
import devlistImage from "../../../images/devlist_ss_1.png";

const StyledPortfolioWorkGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template: 1fr / 1.5fr 1fr;
  grid-gap: 8px;
`;

const StyledPortfolioWorkGridMain = styled.div`
  min-width: 525px;
  min-height: 329px;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template: 1fr 1fr / 1fr;
  grid-template-areas:
    "mainOne"
    "mainTwo";
  grid-gap: 8px;
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
`;

const PortfolioWorkGrid = (): JSX.Element => (
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
        projectType="Web Site"
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

export default PortfolioWorkGrid;
