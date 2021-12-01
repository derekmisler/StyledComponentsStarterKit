import { createGlobalStyle } from "styled-components";

import { ThemeProps } from "@styles/types";

export default createGlobalStyle<ThemeProps>`
  /* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    line-height: calc(1em + 0.5rem);
  }

  ol,
  ul {
    list-style: none;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.baseFontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  #root {
    isolation: isolate;
  }
`;
