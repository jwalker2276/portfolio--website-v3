import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import Header from "../header/header";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: white;
  }
`;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Header />
      <div>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}</footer>
      </div>
    </>
  );
};

export default Layout;
