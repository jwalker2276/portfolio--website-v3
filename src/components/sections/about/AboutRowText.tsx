import React from "react";
import styled from "styled-components";

type AboutRowTextProps = {
  textToDisplay: string;
};

const StyledAboutRowText = styled.p``;

const AboutRowText = ({ textToDisplay }: AboutRowTextProps): JSX.Element => (
  <StyledAboutRowText>{textToDisplay}</StyledAboutRowText>
);

export default AboutRowText;
