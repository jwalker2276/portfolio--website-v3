import React from "react";
import styled from "styled-components";
import rateTeamMateImage from "../../../images/rtm_ss_1.jpg";

const StyledWorkCardsContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid red;
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr;
`;

const StyledWorkCardWrapper = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
`;

const StyledWorkCard = styled.div`
  width: 100%;
  height: 90%;
  min-height: 370px;
  border-radius: 2rem;
  background-image: url(${rateTeamMateImage});
  background-size: cover;
  background-repeat: no-repeat;
  transform: perspective(800px) rotateY(25deg) scale(0.9) rotateX(10deg);
  transition: all 0.6s ease;

  &:hover {
    transform: perspective(800px) rotateY(5deg) translateY(0px) rotateX(10deg)
      scale(1);
  }
`;

const StyledLinksWrapper = styled.div`
  border: 2px solid green;
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr;
`;

const StyledLink = styled.a`
  background-color: white;
  color: black;
  width: 250px;
  margin: 10px;
  padding: 15px;
  border-radius: 5px;
  transition: all 0.6s ease;
`;

const WorkCard = () => {
  return (
    <StyledWorkCardsContainer>
      <StyledWorkCardWrapper>
        <StyledWorkCard />
        <StyledLinksWrapper>
          <StyledLink>Website</StyledLink>
          <StyledLink>Code</StyledLink>
          <StyledLink>Site</StyledLink>
        </StyledLinksWrapper>
      </StyledWorkCardWrapper>
    </StyledWorkCardsContainer>
  );
};

export default WorkCard;
