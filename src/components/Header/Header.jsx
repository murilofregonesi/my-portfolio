import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import {
  white_800,
  white_1000,
  white_600,
  black_1000,
} from "../../UI/variables";
import LanguageSelector from "../LanguageSelector";
import jsonData from "./data.json";
import Translate from "../../UI/Translate";

const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 1px solid ${white_800};
  box-shadow: 8px -6px 16px ${white_800};
  background-color: ${black_1000};
  z-index: 1;
  align-items: center;
  padding: 0.4em 0;
`;

const HeaderContent = styled.span`
  flex-grow: 1;
  text-align: center;

  .link {
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5em 2em;
    color: ${white_600};
  }

  .link:hover {
    text-decoration: underline;
    color: ${white_1000};
  }

  .active {
    text-decoration: underline;
    color: ${white_1000};
  }
`;

const HeaderMargin = styled.div`
  margin-top: 50px;
`;

export function Header() {
  const pathname = useLocation().pathname;

  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <Link
            className={"link" + (pathname === "/" ? " active" : "")}
            to={"/"}
          >
            { Translate(jsonData, "about") }
          </Link>
          <Link
            className={"link" + (pathname === "/carreira" ? " active" : "")}
            to={"/carreira"}
          >
            { Translate(jsonData, "career") }
          </Link>
        </HeaderContent>
        <LanguageSelector />
      </HeaderWrapper>
      <HeaderMargin />
    </>
  );
}
