import React from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Routes } from "./routes";
import { darkTheme } from "./theme";
import { GlobalStyle } from "./theme/GlobalStyle";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Header />
        <Routes />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
