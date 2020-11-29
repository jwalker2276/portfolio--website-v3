import React from "react";
import styled from "styled-components";

type AboutRowStaticIconsProps = {
  imageSource: string;
};

const StyledAboutRowStaticIcons = styled.img`
  width: 400px;
  height: 400px;
`;

const AboutRowStaticIcons = ({
  imageSource,
}: AboutRowStaticIconsProps): JSX.Element => (
  <StyledAboutRowStaticIcons src={imageSource} />
);

export default AboutRowStaticIcons;
