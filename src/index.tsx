import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@atoms/GlobalStyle";
import { theme } from "@styles/theme";

import App from "./App";

render(
  <ThemeProvider theme={theme.dark}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
