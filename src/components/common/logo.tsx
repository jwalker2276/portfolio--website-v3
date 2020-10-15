import * as React from "react";
import { Link } from "gatsby";
import logo from "../../images/logo.svg";
import styled from "styled-components";

// type LogoProps = {
//   varient?: string;
// };

const StyledLink = styled(Link)`
  background-color: blue;
`;

const StyledImage = styled.img`
  width: 50px;
`;

const StyledLogoLink = (): JSX.Element => {
  return (
    <StyledLink to="/">
      <StyledImage src={logo} alt="Logo" />
    </StyledLink>
  );
};

export default StyledLogoLink;
