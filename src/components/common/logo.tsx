import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { device } from "../../breakpoints";

type LogoProps = {
  sizeVarient?: string;
};

const StyledLink = styled(Link)``;

const StyledSVG = styled.svg<LogoProps>`
  width: ${(props): string =>
    props.sizeVarient === "large" ? "75px" : "30px"};
  fill: var(--primary--color-100);

  @media ${device.tablet} {
    width: 50px;
  }

  @media ${device.mobileL} {
    width: 30px;
  } ;
`;

const StyledLogoLink = ({ sizeVarient }: LogoProps): JSX.Element => {
  return (
    <StyledLink to="/">
      <StyledSVG
        sizeVarient={sizeVarient}
        viewBox="0 0 255 255"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
      >
        <path d="M218.3172 0L182.7026 36.327v73.366h-37.0391v-36.327l-36.3269 35.6146v72.6537H73.0098v-36.3268L36.683 182.3465v72.6537l36.3268-36.3269 36.3268-.7122 36.3269-36.3269v-35.6145h36.3268l36.3269 36.3268V0z" />
      </StyledSVG>
    </StyledLink>
  );
};

export default StyledLogoLink;
