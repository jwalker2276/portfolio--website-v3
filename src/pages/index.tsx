import React from "react";
import Layout from "../components/common/Layout";
import HeroSection from "../components/sections/hero/HeroSection";
import SkillsetSection from "../components/sections/skillset/SkillsetSection";

const IndexPage = (): JSX.Element => (
  <Layout>
    <HeroSection />
    <SkillsetSection />
  </Layout>
);

export default IndexPage;
