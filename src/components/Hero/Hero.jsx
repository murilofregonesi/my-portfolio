import React from "react";
import styled from "styled-components";
import {
  orange_200,
  blue_600,
  blue_200,
} from "../../UI/variables";
import avatar from "../../assets/img/hero.png";
import data from "./data.json";

const HeroBox = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${orange_200};
  margin-bottom: 5em;
`;

const HeroAvatar = styled.img`
  height: 300px;
  padding: 2em 0 3em 0;

  @media (orientation: portrait) {
    height: 248px;
  }
`;

const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HeroInfoTitle = styled.h1`
  color: ${blue_200};
  font-weight: bold;
  font-size: 42px;
  margin: 0;
  padding-top: 2em;

  @media (orientation: portrait) {
    font-size: 24px;
    max-width: 70%;
  }
`;

const HeroInfoSubtitle = styled.p`
  color: ${blue_600};
  font-weight: bold;
  font-size: 20px;
  margin-top: 1.5em;

  @media (orientation: portrait) {
    font-size: 12px;
    text-align: center;
    max-width: 90%;
  }
`;

export function Hero() {
  return (
    <HeroBox>
      <HeroInfo>
        <HeroInfoTitle>{data.title}</HeroInfoTitle>
        <HeroInfoSubtitle>{data.subtitle}</HeroInfoSubtitle>
      </HeroInfo>
      <HeroAvatar src={avatar} alt="Avatar do Hero" />
    </HeroBox>
  );
}
