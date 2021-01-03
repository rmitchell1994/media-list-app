import React, { Suspense } from "react";
import Layout from "./atomic/organisms/layout/layout";
import {
  ThemeProvider,
  createGlobalStyle,
  DefaultTheme,
} from "styled-components";
import Routes from "./router";
import theme from "../config/theme.json";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <GlobalStyle />
      <Suspense fallback={"Loading"}>
        <Layout>
          <Routes />
        </Layout>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
