import React from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

const init = async (engine: Engine): Promise<void> => {
  await loadStarsPreset(engine);
};

const starsOptions = {
  preset: "stars",
  background: { color: "#ffffff0" },
  fps_limit: 30,
  fullScreen: {
    zIndex: -5,
  },
  particles: {
    color: {
      value: "#cbd2d9",
    },
  },
};

const StarsAnimation = (): JSX.Element => (
  <Particles options={starsOptions} init={init} />
);

export default StarsAnimation;
