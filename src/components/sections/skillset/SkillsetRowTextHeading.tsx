import React from "react";
import styled from "styled-components";

type RowTextHeadingProps = {
  titleText: string;
};

const StyledSkillsetRowTextHeading = styled.h5`
  font-size: 30px;
  font-weight: 500;
  margin: 0 0 24px 0;
`;

const SkillsetRowTextHeading = ({
  titleText,
}: RowTextHeadingProps): JSX.Element => (
  <StyledSkillsetRowTextHeading>{titleText}</StyledSkillsetRowTextHeading>
);

export default SkillsetRowTextHeading;
