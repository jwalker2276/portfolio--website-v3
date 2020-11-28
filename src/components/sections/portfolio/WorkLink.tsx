import React from "react";
import styled from "styled-components";

type WorkLinkProps = {
  varient: string;
  link?: string;
};

const StyledWorkLinkPrimary = styled.a`
  background-color: var(--primary--color-600);
  color: var(--primary--color-000);
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  width: 128px;
  padding: 10px 12px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;

const StyledWorkLinkSecondary = styled.a`
  background-color: rgba(0, 0, 0, 0);
  color: var(--primary--color-100);
  border: 2px solid var(--primary--color-600);
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  width: 128px;
  padding: 10px 12px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;

const StyledWorkLinkPrivate = styled.a`
  background-color: rgba(0, 0, 0, 0);
  color: var(--neutral--color-500);
  border: 2px solid var(--neutral--color-800);
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  width: 128px;
  padding: 10px 12px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;

const WorkLink = ({ varient, link }: WorkLinkProps): JSX.Element => {
  if (varient === "primary") {
    return (
      <StyledWorkLinkPrimary
        href={link}
        rel="noreferrer nopener"
        target="_blank"
      >
        View Project
      </StyledWorkLinkPrimary>
    );
  } else if (varient === "private") {
    return (
      <StyledWorkLinkPrivate
        href="https://github.com/jwalker2276"
        rel="noreferrer nopener"
        target="_blank"
      >
        Private Source
      </StyledWorkLinkPrivate>
    );
  } else {
    return (
      <StyledWorkLinkSecondary
        href={link}
        rel="noreferrer nopener"
        target="_blank"
      >
        View Source
      </StyledWorkLinkSecondary>
    );
  }
};

export default WorkLink;
