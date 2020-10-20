import React from "react";
import styled from "styled-components";
import WorkDisplay from "./WorkDisplay";
// Images
import rateTeamMateImage from "../../../images/rtm_ss_1.png";
import portfolioSiteImage from "../../../images/portfolio_ss_1.png";
import vindecoderImage from "../../../images/vindecoder_ss_1.png";
import downshiftImage from "../../../images/downshift_ss_1.png";
import canvasAnimationImage from "../../../images/canvas_animation_ss_1.png";

const StyledPortfolioWorkGrid = styled.div``;

const PortfolioWorkGrid = (): JSX.Element => (
  <StyledPortfolioWorkGrid>
    <WorkDisplay
      imageSource={rateTeamMateImage}
      imageAlt="RateTeamMate"
      linkToProject="https://www.jordanwalker.dev"
      projectName="RateTeamMate"
      projectType="Full Stack Web Application"
    />
    <WorkDisplay
      imageSource={portfolioSiteImage}
      imageAlt="Portfolio Site Template"
      linkToProject="https://www.jordanwalker.dev"
      projectName="Portfolio Web Site CMS"
      projectType="Full Stack Web Site"
    />
    <WorkDisplay
      imageSource={vindecoderImage}
      imageAlt="Vindecoder"
      linkToProject="https://www.jordanwalker.dev"
      projectName="Vindecoder"
      projectType="Web Application"
    />
    <WorkDisplay
      imageSource={downshiftImage}
      imageAlt="Downshift"
      linkToProject="https://www.jordanwalker.dev"
      projectName="Downshift"
      projectType="Web Site"
    />
    <WorkDisplay
      imageSource={canvasAnimationImage}
      imageAlt="Canvas Animation"
      linkToProject="https://www.jordanwalker.dev"
      projectName="Landing Page Animation"
      projectType="Canvas Animation"
    />
  </StyledPortfolioWorkGrid>
);

export default PortfolioWorkGrid;
