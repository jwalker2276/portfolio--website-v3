import React from "react";
import styled from "styled-components";

type UpperFooterMainStatementProps = {
  statementText: string;
};

const StyledUpperFooterMainStatement = styled.h6``;

const UpperFooterMainStatement = ({
  statementText,
}: UpperFooterMainStatementProps): JSX.Element => (
  <StyledUpperFooterMainStatement>
    {statementText}
  </StyledUpperFooterMainStatement>
);

export default UpperFooterMainStatement;
