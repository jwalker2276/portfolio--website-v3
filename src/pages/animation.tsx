import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import GodPixel from "../components/canvas/GodPixel";
import LayoutNoNavAndFooter from "../components/common/LayoutNoNavAndFooter";

const StyledSection = styled.section`
  padding: 0 20%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  text-align: center;
`;

const StyledMessagePrimary = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: var(--primary--color-600);
  margin: 0 0 24px 0;
`;

const StyledMessageSecondary = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: var(--neutral--color-000);
  margin: 0 0 24px 0;
`;

const StyledLink = styled(Link)`
  background-color: var(--primary--color-600);
  color: var(--neutral--color-000);
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  height: 36px;
  padding: 10px 12px;
  cursor: pointer;
  text-decoration: none;
  text-shadow: 0 0 10px var(--neutral--color-900);
`;

const NotFoundPage = (): JSX.Element => {
  return (
    <LayoutNoNavAndFooter>
      <StyledSection>
        <GodPixel />
        <StyledMessageWrapper>
          <StyledMessagePrimary>Web Page Animations</StyledMessagePrimary>
          <StyledMessageSecondary></StyledMessageSecondary>
          <StyledLink to="/" id="btn--back_button">
            Back to the home page
          </StyledLink>
        </StyledMessageWrapper>
      </StyledSection>
    </LayoutNoNavAndFooter>
  );
};

export default NotFoundPage;
