import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import NavWrapper from "../nav/NavWrapper";
import Footer from "../footer/Footer";
// Font
import "typeface-inter";
// Normalize
import { normalize } from "styled-normalize";
// Image
import backgroundPattern from "../../images/stardust.png";
// Breakpoints
import { device } from "../../breakpoints";
import SEO from "./SEO";

const GlobalStyle = createGlobalStyle`	
  /* Normalize css styles */	
  ${normalize}	
  /* Vars */	
  :root {	
    /* Primary Colors */	
    --primary--color-000: #e3f8ff;	
    --primary--color-100: #b3ecff;	
    --primary--color-600: #1992d4;	
    /* Neutrals Colors */	
    --neutral--color-000: #f5f7fa;	
    --neutral--color-100: #e4e7eb;	
    --neutral--color-200: #cbd2d9;	
    --neutral--color-500: #616e7c;	
    --neutral--color-800: #323f4b;	
    --neutral--color-900: #1f2933;	
    /* Shadows */	
    --shadow--color-500: rgba(31, 41, 51, .5);	
    /* Spacing */	
    --page--padding: 0px 0px;	
  }	
  html, body, #___gatsby {	
    width: 100%;	
    height: 100%;	
  }	
  	
  body {	
    background-color: var(--neutral--color-900);	
    font-family: "Inter", georgia, serif;	
    font-weight: 400;	
    font-size: 16px;	
    margin: auto;	
    max-width: 1024px;	
    color: var(--neutral--color-000);	
    background-image: url(${backgroundPattern});	
    @media ${device.laptop} {	
      padding: 0 16px	
    }    	
  }	
  * {	
    box-sizing: border-box;	
    margin: 0;	
    padding: 0;	
  }	
`;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <SEO />
      <GlobalStyle />
      <NavWrapper />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
