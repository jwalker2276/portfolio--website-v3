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
  
  body {
    background-color: white;
    font-family: "Inter", georgia, serif;
    font-weight: normal;
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
