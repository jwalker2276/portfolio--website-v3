import React from "react";
import styled from "styled-components";
import WorkDisplay from "./WorkDisplay";
// Images
import rateTeamMateImage from "../../../images/rtm_ss_1.png";
import PortfolioSiteImage from "../../../images/portfolio_ss_1.png";

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
  </StyledPortfolioWorkGrid>
);

export default PortfolioWorkGrid;
