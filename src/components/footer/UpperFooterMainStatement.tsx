import React from "react";
import styled from "styled-components";
import { device } from "../../breakpoints";

type UpperFooterMainStatementProps = {
  statementText: string;
};

const StyledUpperFooterMainStatement = styled.h6`
  font-size: 36px;
  font-weight: 700;
  text-align: center;

  @media ${device.tablet} {
    font-size: 30px;
  }

  @media ${device.tabletS} {
    font-size: 24px;
  }

  @media ${device.mobileL} {
    font-size: 16px;
  } ;
`;

const UpperFooterMainStatement = ({
  statementText,
}: UpperFooterMainStatementProps): JSX.Element => (
  <StyledUpperFooterMainStatement>
    {statementText}
  </StyledUpperFooterMainStatement>
);

export default UpperFooterMainStatement;
