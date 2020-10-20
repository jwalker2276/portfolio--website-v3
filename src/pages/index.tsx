import React from "react";
import Layout from "../components/common/Layout";
import HeroSection from "../components/sections/hero/HeroSection";
import PortfolioSection from "../components/sections/portfolio/PortfolioSection";
import SkillsetSection from "../components/sections/skillset/SkillsetSection";
import AboutSection from "../components/sections/about/AboutSection";

const IndexPage = (): JSX.Element => (
  <Layout>
    <HeroSection />
    <SkillsetSection />
    <PortfolioSection />
    <AboutSection />
  </Layout>
);

export default IndexPage;
