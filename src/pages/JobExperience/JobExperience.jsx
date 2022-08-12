import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Button } from "../../components/Button/Button";
import logo_sensedata from "../../assets/img/logo_sensedata.svg";
import logo_schaeffler from "../../assets/img/logo_schaeffler.svg";
import logo_aiesec from "../../assets/img/logo_aiesec.svg";
import {
  black_200,
  black_600,
  black_800,
  black_1000,
} from "../../UI/variables";
import styled from "styled-components";
import data from "./data.json";

const ExpHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
`;

const ExpHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ExpHeaderLogo = styled.img`
  height: 64px;
  width: 160px;
  margin-right: 2em;
`;

const ExpHeaderTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

const ExpHeaderPeriod = styled.span`
  font-size: 14px;
`;

const ExpBody = styled.div`
  width: 80%;
  align-self: center;

  @media (min-width: 600px) {
    width: 60%;
  }
`;

const ExpBodyText = styled.p`
  font-size: 14px;
  align-self: center;
`;

const ExpBodyTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const Highlight = styled.div`
  background-color: ${black_600};
  width: 70%;
  align-self: center;
  border: solid 1px ${black_200};
  border-radius: 12px;
  padding: 1em 1em 0 1em;
  margin-top: 1em;

  @media (min-width: 600px) {
    width: 50%;
  }
`;

const logos = [logo_sensedata, logo_schaeffler, logo_aiesec];

export function JobExperience() {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {logos.map((logo, i) => {
              return (
                <div
                  className="section"
                  style={{
                    backgroundColor: i % 2 === 0 ? black_1000 : black_800,
                  }}
                  key={i}
                >
                  <ExpHeader>
                    <ExpHeaderLogo src={logo} />
                    <ExpHeaderInfo>
                      <ExpHeaderTitle>{data[i].title}</ExpHeaderTitle>
                      <ExpHeaderPeriod>{data[i].period}</ExpHeaderPeriod>
                    </ExpHeaderInfo>
                  </ExpHeader>
                  <ExpBody>
                    <ExpBodyText
                      dangerouslySetInnerHTML={{ __html: data[i].summary }}
                    />
                    <ExpBodyTitle>Conquistas</ExpBodyTitle>
                    <ExpBodyText
                      dangerouslySetInnerHTML={{ __html: data[i].achievements }}
                    />
                  </ExpBody>
                  <Highlight>
                    <ExpBodyTitle>Diferencial</ExpBodyTitle>
                    <ExpBodyText
                      dangerouslySetInnerHTML={{ __html: data[i].hilights }}
                    />
                  </Highlight>
                  <Button
                    text={"Próximo"}
                    transparent
                    onClick={() => fullpageApi.moveSectionDown()}
                  />
                </div>
              );
            })}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
