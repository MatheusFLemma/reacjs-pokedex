import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { RecoilRoot } from "recoil";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>,
);
