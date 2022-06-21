import React from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import useScreenWidth from "../../../customhooks/useScreenWidth";

const StyledBlackHoleAnimation = styled.div`
  width: 100%;
  height: 100%;
  & #blackhole-animation-canvas {
    height: 100%;
    width: 100%;
  }
`;

const BlackHoleAnimation = () => {
  const screenSize = useScreenWidth(640);

  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  const blackHoleOptions = {
    background: {
      position: "50% 50%",
      size: "cover",
      repeat: "no-repeat",
    },
    fps_limit: 120,
    fullScreen: {
      enable: false,
      zIndex: -1,
    },
    particles: {
      color: {
        value: "#616e7c",
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        enable: true,
        speed: 2,
      },
      number: {
        value: screenSize === "large" ? 50 : 25,
      },
      opacity: {
        value: {
          min: 0.1,
          max: 0.5,
        },
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.1,
        },
      },
      size: {
        value: {
          min: 1,
          max: 5,
        },
        animation: {
          speed: 1,
          minimumValue: 0.1,
        },
      },
    },
    absorbers: {
      color: {
        value: "#161515",
      },
      draggable: false,
      opacity: 1,
      destroy: true,
      orbits: false,
      size: {
        value: {
          min: 5,
          max: 5,
        },
        density: 5,
        limit: {
          radius: 10,
          mass: 300,
        },
      },
      position: {
        x: 15,
        y: 25,
      },
    },
  };

  return (
    <StyledBlackHoleAnimation>
      <Particles
        id="blackhole-animation-canvas"
        init={particlesInit}
        options={blackHoleOptions}
      />
    </StyledBlackHoleAnimation>
  );
};

export default BlackHoleAnimation;
