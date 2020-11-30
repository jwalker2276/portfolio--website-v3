import React from "react";
import styled from "styled-components";
import { device } from "../../../breakpoints";

type SkillsetSectionRowProps = {
  children: React.ReactNode;
};

const StyledSkillsetSectionRow = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  margin: 128px 0;
  column-gap: 24px;

  @media ${device.tablet} {
    margin: 64px 0;
  }

  @media ${device.tabletS} {
    grid-template: 1fr 1fr / 1fr;
    margin: 36px 0;
  }
`;

const SkillsetSectionRow = ({
  children,
}: SkillsetSectionRowProps): JSX.Element => (
  <StyledSkillsetSectionRow>{children}</StyledSkillsetSectionRow>
);

export default SkillsetSectionRow;
