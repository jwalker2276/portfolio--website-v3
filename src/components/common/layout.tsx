import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import NavWrapper from "../nav/NavWrapper";
import Footer from "../footer/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: white;
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
