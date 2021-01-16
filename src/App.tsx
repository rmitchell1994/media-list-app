import React, { Suspense } from "react";
import Layout from "./atomic/organisms/layout/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import firebase from "firebase/app";
import {
  ThemeProvider,
  createGlobalStyle,
  DefaultTheme,
} from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router";
import theme from "../config/theme.json";
import SignedInProvider from "./context/signed-in-provider";

firebase.initializeApp({
  apiKey: "AIzaSyCoxTs8fCDpVYS2EH9PFqPMYckuIgmooIY",
  authDomain: "media-list-app.firebaseapp.com",
  projectId: "media-list-app",
  storageBucket: "media-list-app.appspot.com",
  messagingSenderId: "622664374317",
  appId: "1:622664374317:web:c5711b9a9e6bbb946e00a4",
  measurementId: "G-XJM9V52B2V",
});

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
      <ThemeProvider theme={theme as DefaultTheme}>
        <SignedInProvider>
          <GlobalStyle />
          <ReactQueryDevtools initialIsOpen />
          <Suspense fallback={"Loading"}>
            <Router>
              <Layout>
                <Routes />
              </Layout>
            </Router>
          </Suspense>
        </SignedInProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
