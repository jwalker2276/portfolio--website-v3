import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WorkDisplay from "./WorkDisplay";
// Images
import rateTeamMateImage from "../../../images/rtm_ss_1.jpg";
import vindecoderImage from "../../../images/vindecoder_ss_1.jpg";
import downshiftImage from "../../../images/downshift_ss_1.jpg";
import canvasAnimationImage from "../../../images/canvas_animation_ss_1.jpg";
import { device } from "../../../breakpoints";
import useScreenWidth from "../../../customhooks/useScreenWidth";

const StyledPortfolioWorkGrid = styled.div`
  min-height: 768px;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-gap: 8px;

  @media ${device.tablet} {
    grid-template: 1fr 1fr 1fr 1fr / 1fr;
  }
`;

const PortfolioWorkGrid = (): JSX.Element => {
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
    <StyledPortfolioWorkGrid>
      <WorkDisplay
        imagesource={rateTeamMateImage}
        linkToProject="https://www.teammateme.com/"
        projectName="RateTeamMate"
        projectType="Full Stack Web Application"
      />
      <WorkDisplay
        imagesource={downshiftImage}
        linkToProject="https://downshift-demo.netlify.app"
        linkToCode="https://github.com/jwalker2276/gatsby-site-demo"
        projectName="Downshift"
        projectType="Website"
      />
      <WorkDisplay
        imagesource={vindecoderImage}
        linkToProject="https://www.vindecodeapp.com/"
        linkToCode="https://github.com/jwalker2276/vinDecode"
        projectName="Vin Decoder"
        projectType="Web Application"
      />
      <WorkDisplay
        imagesource={canvasAnimationImage}
        linkToProject="https://www.jordanwalker.dev/animation"
        linkToCode="https://github.com/jwalker2276/portfolio--website-v3/blob/master/src/components/canvas/GodPixel.tsx"
        projectName="Web Page Animations"
        projectType="Canvas Animation"
      />
    </StyledPortfolioWorkGrid>
  );
};

export default PortfolioWorkGrid;
