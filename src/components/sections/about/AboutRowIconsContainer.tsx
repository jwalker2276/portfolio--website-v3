import React from "react";
import styled from "styled-components";

type RowIconsContainerProps = {
  children: React.ReactNode;
};

const StyledAboutRowIconsContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const AboutRowIconsContainer = ({
  children,
}: RowIconsContainerProps): JSX.Element => (
  <StyledAboutRowIconsContainer>{children}</StyledAboutRowIconsContainer>
);

export default AboutRowIconsContainer;
