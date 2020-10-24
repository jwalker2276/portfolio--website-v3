import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import NavWrapper from "../nav/NavWrapper";
import Footer from "../footer/Footer";
// Font
import "typeface-inter";
// Normalize
import { normalize } from "styled-normalize";

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

    /* Spacing */
    --page--padding: 0 72px;
  }
  
  body {
    background-color: var(--neutral--color-900);
    font-family: "Inter", georgia, serif;
    font-weight: normal;
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
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <GlobalStyle />
      <NavWrapper />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
