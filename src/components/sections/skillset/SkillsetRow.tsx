import React from "react";
import styled from "styled-components";

type SkillsetSectionRowProps = {
  children: React.ReactNode;
};

const StyledSkillsetSectionRow = styled.div``;

const SkillsetSectionRow = ({
  children,
}: SkillsetSectionRowProps): JSX.Element => (
  <StyledSkillsetSectionRow>{children}</StyledSkillsetSectionRow>
);

export default SkillsetSectionRow;
