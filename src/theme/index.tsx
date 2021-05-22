import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalFonts from "../fonts/fonts";
import GlobalStyles from "./globalstyles";

export const theme = {
  colors: {
    primary: "#966565",
    secondary: "#208883",
    background: {
      dark: "#191919",
      light: "#FFFFFF",
    },
    text: {
      primary: "#494949",
      inverse: "#FFFFFF",
    },
  },
  breakpoints: {
    tablet: "768px",
    desktop: "1050px",
  },
};

const AppThemeProvider: React.FC<{}> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalFonts />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  );
};

export default AppThemeProvider;
