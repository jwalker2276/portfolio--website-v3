import React from "react";
import styled from "styled-components";
import WorkDisplay from "./WorkDisplay";
// Images
import rateTeamMateImage from "../../../images/rtm_ss_1.png";
import portfolioSiteImage from "../../../images/portfolio_ss_1.png";
import vindecoderImage from "../../../images/vindecoder_ss_1.png";
import downshiftImage from "../../../images/downshift_ss_1.png";
import canvasAnimationImage from "../../../images/canvas_animation_ss_1.png";

const StyledPortfolioWorkGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template: 1fr / 1.5fr 1fr;
  grid-gap: 8px;
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
`;

const StyledPortfolioWorkGridOther = styled.div`
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
        imageSource={rateTeamMateImage}
        linkToProject="https://www.jordanwalker.dev"
        projectName="RateTeamMate"
        projectType="Full Stack Web Application"
        gridArea="mainOne"
      />
      <WorkDisplay
        imageSource={portfolioSiteImage}
        linkToProject="https://www.jordanwalker.dev"
        projectName="Portfolio Web Site CMS"
        projectType="Full Stack Web Site"
        gridArea="mainTwo"
      />
    </StyledPortfolioWorkGridMain>
    <StyledPortfolioWorkGridOther>
      <WorkDisplay
        imageSource={vindecoderImage}
        linkToProject="https://www.jordanwalker.dev"
        projectName="Vindecoder"
        projectType="Web Application"
        gridArea="otherOne"
      />
      <WorkDisplay
        imageSource={downshiftImage}
        linkToProject="https://www.jordanwalker.dev"
        projectName="Downshift"
        projectType="Web Site"
        gridArea="otherTwo"
      />
      <WorkDisplay
        imageSource={canvasAnimationImage}
        linkToProject="https://www.jordanwalker.dev"
        projectName="Landing Page Animation"
        projectType="Canvas Animation"
        gridArea="otherThree"
      />
    </StyledPortfolioWorkGridOther>
  </StyledPortfolioWorkGrid>
);

export default PortfolioWorkGrid;
