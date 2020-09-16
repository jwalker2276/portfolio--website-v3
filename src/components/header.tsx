import { Link } from "gatsby";
import React from "react";

interface Props {
  siteTitle: string;
}

const Header = ({ siteTitle }: Props): JSX.Element => (
  <header>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
