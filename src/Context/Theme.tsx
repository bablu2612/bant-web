import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      orange: string;
      purple: string;
      black: string;
      pink: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    fonts: string[];
  }
}

const theme: DefaultTheme = {
  colors: {
    orange: "#EA862C",
    purple: " #572B73",
    black: "#040404",
    pink: " #A31265",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
