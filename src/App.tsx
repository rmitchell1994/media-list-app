import React, { Suspense } from "react";
import Layout from "./components/layout/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import firebase from "firebase/app";
import "firebase/auth";
import {
  ThemeProvider,
  createGlobalStyle,
  DefaultTheme,
} from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./modules/routes";
import theme from "../config/theme.json";
import SignedInProvider from "./context/signed-in-provider";

firebase.initializeApp(CONFIG.firebase);

if (location.href.includes("localhost")) {
  firebase.auth().useEmulator(CONFIG.authEmulator);
}

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

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SignedInProvider>
        <ThemeProvider theme={theme as DefaultTheme}>
          <GlobalStyle />
          <ReactQueryDevtools initialIsOpen={false} />
          <Router>
            <Layout>
              <Suspense fallback={"Loading"}>
                <Routes />
              </Suspense>
            </Layout>
          </Router>
        </ThemeProvider>
      </SignedInProvider>
    </QueryClientProvider>
  );
};

export default App;
