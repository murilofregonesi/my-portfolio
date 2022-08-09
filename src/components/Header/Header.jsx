import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { white_1000 } from "../../UI/variables";

const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 0;
  border-bottom: 1px solid ${white_1000};
  box-shadow: 8px -6px 16px ${white_1000};

  .link {
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5em 2em;
    color: ${white_1000};
  }

  .link:hover {
    text-decoration: underline;
  }
`;

const HeaderMargin = styled.div`
  margin-top: 6em;
`;

export function Header() {
  return (
    <>
      <HeaderWrapper>
        <Link className="link" to={"/"}>
          Sobre
        </Link>
        <Link className="link" to={"/carreira"}>
          Carreira
        </Link>
        <Link className="link" to={"/projetos"}>
          Projetos
        </Link>
      </HeaderWrapper>
      <HeaderMargin />
    </>
  );
}
