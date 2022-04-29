import React from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";

const StyledBlackHoleAnimation = styled.div`
  width: 100%;
  height: 100%;
  & #tsparticles {
    height: 100%;
    width: 100%;
  }
`;

const BlackHoleAnimation = () => {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  const particlesLoaded = (container: Container) => {
    console.log(container);
  };

  const options = {
    background: {
      position: "50% 50%",
      size: "cover",
      repeat: "no-repeat",
    },
    fps_limit: 120,
    fullScreen: {
      enable: false,
    },
    particles: {
      color: {
        value: "#5f5f5f",
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        enable: true,
        outModes: {
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
      },
      number: {
        value: 100,
      },
      opacity: {
        random: {
          enable: true,
        },
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
        random: {
          enable: true,
        },
        value: {
          min: 1,
          max: 5,
        },
        animation: {
          speed: 20,
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
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </StyledBlackHoleAnimation>
  );
};

export default BlackHoleAnimation;
