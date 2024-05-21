import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode"

          green: { main: "#068548" },
          dark:{main:"#2B3445"},
          drawer: { main: "#000000" },
          white: { main: "#FFFFFF" },
          primary: {
            main: "#068548", // Rouge
          },

          text: {
            primary: "#2B3445",
          },
          aghiles: { prim: "#000000" },

          myColor: {
            main: "#F3F3F2",
          },

          bg: {
            main: "#F6F6F6",
          },

          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },

          onglet: { main: "#068548" },
          elementCard: { primary: "#231142" },
        }
      : // palette values for dark mode

        {
          dark:{main:"#2B3445"},

          green: { main: "#068548" },

          drawer: { main: "#FFFFFF" },

          white: { main: "#FFFFFF" },
          elementCard: { primary: "#FFFFFF" },

          primary: {
            main: "#068548", // Rouge
          },

          text: {
            primary: "#ffffff",
          },

          aghiles: { prim: "#FFFFFF" },
          myColor: {
            main: "#16191C",
          },
          onglet: { main: "#068548" },
          bg: {
            main: "#1D2021",
          },

          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[800],
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
