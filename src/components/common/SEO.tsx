import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

type SEOProps = {
  title: string;
  description: string;
  image: string;
  article: boolean;
};

const SEO = ({ title, description, image, article }: SEOProps): JSX.Element => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const { defaultTitle, defaultDescription, siteUrl, defaultImage } =
    site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title}>
      <html lang="en" />
      {/* <!-- Primary Meta Tags --> */}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* <!-- Open Graph / Facebook --> */}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {(article ? true : null) && <meta property="og:type" content="website" />}

      {/* <!-- Twitter --> */}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      <meta property="twitter:url" content="https://www.jordanwalker.dev/" />
      {seo.image && <meta name="twitter:image" content={seo.image} />}

      <meta property="twitter:card" content="summary_large_image" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEO;

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
        author: author
      }
    }
  }
`;
