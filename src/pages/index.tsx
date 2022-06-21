import React from "react";
import Layout from "../components/common/Layout";
import HeroSection from "../components/sections/hero/HeroSection";
import PortfolioSection from "../components/sections/portfolio/PortfolioSection";
import SkillsetSection from "../components/sections/skillset/SkillsetSection";
import AboutSection from "../components/sections/about/AboutSection";
import ContactSection from "../components/sections/contact/SectionContact";
import StarsAnimation from "../components/animations/stars/StarsAnimation";

const IndexPage = (): JSX.Element => (
  <Layout>
    <StarsAnimation />
    <HeroSection />
    <SkillsetSection />
    <PortfolioSection />
    <AboutSection />
    <ContactSection />
  </Layout>
);

export default IndexPage;
