import React from "react";
import styled from "styled-components";

type RowIconsContainerProps = {
  children: React.ReactNode;
};

const StyledAboutRowIconsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AboutRowIconsContainer = ({
  children,
}: RowIconsContainerProps): JSX.Element => (
  <StyledAboutRowIconsContainer>{children}</StyledAboutRowIconsContainer>
);

export default AboutRowIconsContainer;
