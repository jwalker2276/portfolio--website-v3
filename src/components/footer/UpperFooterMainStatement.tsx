import React from "react";
import styled from "styled-components";

type UpperFooterMainStatementProps = {
  statementText: string;
};

const StyledUpperFooterMainStatement = styled.h6`
  font-size: 36px;
  font-weight: 700;
`;

const UpperFooterMainStatement = ({
  statementText,
}: UpperFooterMainStatementProps): JSX.Element => (
  <StyledUpperFooterMainStatement>
    {statementText}
  </StyledUpperFooterMainStatement>
);

export default UpperFooterMainStatement;
