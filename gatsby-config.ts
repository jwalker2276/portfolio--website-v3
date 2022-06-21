import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jordan Walker | Full-stack App Developer`,
    description: `Full-stack app developer experienced in developing web applications using modern tools.`,
    author: `Jordan Walker`,
    siteUrl: `https://www.jordanwalker.dev`,
    image: `/site_main.png`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jordan Walker`,
        short_name: `Jordan Walker`,
        start_url: `/`,
        background_color: `#1f2933`,
        theme_color: `#1f2933`,
        display: `standalone`,
        icon: `src/images/logo_color.svg`,
      },
    },
  ],
};

export default config;
