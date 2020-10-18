import React from "react";
import styled from "styled-components";

type RowTextHeadingProps = {
  titleText: string;
};

const StyledSkillsetRowTextHeading = styled.h5``;

const SkillsetRowTextHeading = ({
  titleText,
}: RowTextHeadingProps): JSX.Element => (
  <StyledSkillsetRowTextHeading>{titleText}</StyledSkillsetRowTextHeading>
);

export default SkillsetRowTextHeading;
