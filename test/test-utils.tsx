import React, { ComponentType, ReactElement } from "react";
import { render, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "../config/theme.json";

interface Props {
  children: React.ReactNode;
}

const AllTheProviders = ({ children }: Props): ReactElement => {
  return (
    <Router>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Router>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Record<string, unknown>
): RenderResult =>
  render(ui, { wrapper: AllTheProviders as ComponentType, ...options });

export * from "@testing-library/react";
export { customRender as render };
