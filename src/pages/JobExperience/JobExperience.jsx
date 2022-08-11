import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import icon_link from "../../assets/img/icon_link.svg";

export function JobExperience() {
  const navigate = useNavigate();

  return (
    <ReactFullpage
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <h1>SenseData</h1>
              <p>Nice surprice</p>
              <Button
                text={"Próximo"}
                transparent
                onClick={() => fullpageApi.moveSectionDown()}
              />
            </div>
            <div className="section">
              <h1>Schaeffler</h1>
              <p>Section 2</p>
              <Button
                text={"Próximo"}
                transparent
                onClick={() => fullpageApi.moveSectionDown()}
              />
            </div>
            <div className="section">
              <h1>AIESEC</h1>
              <p>Section 2</p>
              <Button
                text={"Meus Projetos"}
                icon={icon_link}
                onClick={() => navigate("/projetos")}
              />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
