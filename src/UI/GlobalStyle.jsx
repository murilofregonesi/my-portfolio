import { createGlobalStyle } from "styled-components";
import { black_1000, white_1000 } from "./variables";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, Arial, Sans-Serif;
    color: ${white_1000};
    background-color: ${black_1000};
  }
`;
