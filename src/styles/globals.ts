import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import media from "./media";

const GlobalStyles = createGlobalStyle`
  ${reset}
  :root {
      font-size: 10px; /* 1rem = 10px */
      width: 100%;
      overflow-x: clip;
  }
  a{
      text-decoration: none;
      color: inherit;
  }
  *{
      box-sizing: border-box;
  }
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table{
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 1rem;
      vertical-align: baseline;
  }
  body{
      line-height: 1;
      font-family: 'Pretendard', 'Raleway', "SpoqaHanSansNeo-Regular", sans-serif;
      background-color: white;
  }
  main {
    ${[media().large, media().medium].map(
      (mediaQuery) => `
    ${mediaQuery`
      {padding-top: 7.5rem;}
    `}
  `,
    )}
  }
  ol, ul{
      list-style: none;
  }
  button {
      border: 0;
      background: transparent;
      cursor: pointer;
  }
  input {
    border: none;
  }
  .a11y-hidden {
  position: absolute;
  width: 0.1rem;
  height: 0.1rem;
  margin: -0.1rem;
  overflow: hidden;
  clip-path: polygon(0 0, 0 0, 0 0);
  }
  [class*="inner"] {
    width: 116rem;
    margin: auto;
    padding: 1.5rem 0;
  }
  .logo {
    display: none;
    ${media().large`
      display: block;
      width: 24.8rem;
      height: 2.7rem;
      position: relative;
  `}
  }
  ${[media().extraSmall, media().small, media().medium].map(
    (mediaQuery) => `
    ${mediaQuery`
      [class*="inner"] {
        width: 100%;
        padding-left: 3.5%;
        padding-right: 3.5%;
      }
    `}
  `,
  )}
`;

export default GlobalStyles;
