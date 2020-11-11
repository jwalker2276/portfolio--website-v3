import React from "react";
import styled from "styled-components";

const StyledCopyrightStatement = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

const CopyrightStatement = (): JSX.Element => (
  <StyledCopyrightStatement>
    © {new Date().getFullYear()}, JWalkerCreations. All Rights Reserved
  </StyledCopyrightStatement>
);

export default CopyrightStatement;
