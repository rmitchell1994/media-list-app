import React, { Suspense } from "react";
import Layout from "./atomic/organisms/layout";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Routes from "./router";

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
    <ThemeProvider theme={{ borderRadius: "2" }}>
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
