import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import UsersPage from "./pages/UsersPage";

const palette = {
  lightGrey: "#F3F2F7",
  mediumGrey: "#f9f9fb",
  darkGrey: "#617892",
  white: "#FFFFFF"
};

const theme = {
  backgroundColor: palette.lightGrey,
  headerRowColor: palette.mediumGrey,
  defaultFontColor: palette.darkGrey,
  white: palette.white
};

const GlobalStyle = createGlobalStyle`
    html {
        background: ${props => props.theme.backgroundColor};
        display: flex;
    }
    body {
        font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen-Sans,
        Ubuntu, Cantarell, Helvetica Neue, sans-serif;
        margin: auto;
        width: 100%;
        color: ${props => props.theme.defaultFontColor}
    }
  `;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UsersPage />
    </ThemeProvider>
  );
}

export default App;
