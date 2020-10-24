import React from "react";
import styled from "styled-components";

const StyledCopyrightStatement = styled.p``;

const CopyrightStatement = (): JSX.Element => (
  <StyledCopyrightStatement>
    © {new Date().getFullYear()}, JWalkerCreations. All Rights Reserved
  </StyledCopyrightStatement>
);

export default CopyrightStatement;
