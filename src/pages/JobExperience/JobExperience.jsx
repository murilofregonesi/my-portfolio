import React, { useContext } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import logo_sensedata from "../../assets/img/logo_sensedata.svg";
import logo_schaeffler from "../../assets/img/logo_schaeffler.svg";
import logo_aiesec from "../../assets/img/logo_aiesec.svg";
import { black_800, blue_200, black_1000, blue_800, white_800 } from "../../UI/variables";
import styled from "styled-components";
import jsonData from "./data.json";
import { LanguageContext } from "../../contexts/LanguageProvider/LanguageProvider";

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

  @media (orientation: portrait) {
    max-width: 150px;
  }
`;

const ExpHeaderLogo = styled.img`
  height: 64px;
  width: 160px;
  margin-right: 2em;

  @media (orientation: portrait) {
    height: 48px;
    width: 120px;
  }
`;

const ExpHeaderTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0.5em;

  @media (orientation: portrait) {
    font-size: 16px;
  }
`;

const ExpHeaderPeriod = styled.span`
  font-size: 14px;

  @media (orientation: portrait) {
    font-size: 14px;
  }
`;

const ExpBody = styled.div`
  width: 80%;
  align-self: center;

  @media (min-width: 600px) {
    width: 60%;
  }
`;

const ExpBodyText = styled.p`
  font-size: 16px;
  align-self: center;
  color: ${white_800};

  @media (orientation: portrait) {
    font-size: 14px;
  }
`;

const ExpBodyTitle = styled.span`
  font-size: 16px;
  font-weight: bold;

  @media (orientation: portrait) {
    font-size: 14px;
  }
`;

const Highlight = styled.div`
  background-color: ${blue_800};
  width: 70%;
  align-self: center;
  border: solid 1px ${blue_200};
  box-shadow: 8px 8px 5px black;
  border-radius: 12px;
  padding: 1em 1em 0 1em;
  margin-top: 1em;

  @media (min-width: 600px) {
    width: 50%;
  }
`;

const logos = [logo_sensedata, logo_schaeffler, logo_aiesec];

export function JobExperience() {
  const { language } = useContext(LanguageContext);

  return (
    <ReactFullpage
      scrollingSpeed={1000}
      navigation={true}
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
                      <ExpHeaderTitle>
                        {jsonData[i].title[language]}
                      </ExpHeaderTitle>
                      <ExpHeaderPeriod>
                        {jsonData[i].period[language]}
                      </ExpHeaderPeriod>
                    </ExpHeaderInfo>
                  </ExpHeader>
                  <ExpBody>
                    <ExpBodyText
                      dangerouslySetInnerHTML={{
                        __html: jsonData[i].summary[language],
                      }}
                    />
                    <ExpBodyTitle>
                      {language === "pt" ? "Conquistas" : "Achievements"}
                    </ExpBodyTitle>
                    <ExpBodyText
                      dangerouslySetInnerHTML={{
                        __html: jsonData[i].achievements[language],
                      }}
                    />
                  </ExpBody>
                  <Highlight>
                    <ExpBodyTitle>
                      {language === "pt" ? "Diferencial" : "Hilights"}
                    </ExpBodyTitle>
                    <ExpBodyText
                      dangerouslySetInnerHTML={{
                        __html: jsonData[i].hilights[language],
                      }}
                    />
                  </Highlight>
                </div>
              );
            })}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
