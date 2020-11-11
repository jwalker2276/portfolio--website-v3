import React from "react";
import styled from "styled-components";

type AboutRowTextProps = {
  textToDisplay: string;
};

const StyledAboutRowText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

const AboutRowText = ({ textToDisplay }: AboutRowTextProps): JSX.Element => (
  <StyledAboutRowText>{textToDisplay}</StyledAboutRowText>
);

export default AboutRowText;
