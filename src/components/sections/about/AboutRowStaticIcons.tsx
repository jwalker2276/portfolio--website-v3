import React from "react";
import styled from "styled-components";

type AboutRowStaticIconsProps = {
  imageSource: string;
};

const StyledAboutRowStaticIcons = styled.img`
  width: 150px;
  height: 150px;
`;

const AboutRowStaticIcons = ({
  imageSource,
}: AboutRowStaticIconsProps): JSX.Element => (
  <StyledAboutRowStaticIcons src={imageSource} alt="code icon" />
);

export default AboutRowStaticIcons;
