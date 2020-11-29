import React from "react";
import styled from "styled-components";

const StyledCopyrightStatement = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

const CopyrightStatement = (): JSX.Element => (
  <StyledCopyrightStatement>
    Designed and Developed by Jordan Walker, © {new Date().getFullYear()}
  </StyledCopyrightStatement>
);

export default CopyrightStatement;
