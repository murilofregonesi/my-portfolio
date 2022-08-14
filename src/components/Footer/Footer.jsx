import React from "react";
import styled from "styled-components";
import { black_1000, white_800 } from "../../UI/variables";
import icon_github from "../../assets/img/icon_github.svg";
import icon_linkedin from "../../assets/img/icon_linkedin.svg";

const FooterGradient = styled.span`
  display: flex;
  justify-content: center;
  background: linear-gradient(
    0deg,
    rgb(255, 255, 255, 0.1),
    ${black_1000} 100%
  );
`;

const FooterWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 4em 0 0.4em 0;
  padding-top: 0.4em;
  border-top: 1px solid ${white_800};
`;

const Brand = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${white_800};
`;

const MediaIcons = styled.div`
  display: flex;
  flex-direction: row;
  height: 32px;
`;

const MediaIcon = styled.img`
  height: 32px;
  padding-left: 4px;
`;

export function Footer() {
  return (
    <FooterGradient>
      <FooterWrapper>
        <Brand>Murilo Fregonesi Falleiros</Brand>
        <MediaIcons>
          <a href="https://www.linkedin.com/in/murilofregonesi/">
            <MediaIcon src={icon_linkedin} />
          </a>
          <a href="https://github.com/murilofregonesi">
            <MediaIcon src={icon_github} />
          </a>
        </MediaIcons>
      </FooterWrapper>
    </FooterGradient>
  );
}
