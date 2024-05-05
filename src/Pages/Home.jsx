//import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
//import { Outlet } from "react-router-dom";
import H1 from ".././components/header/H1";
import H2 from ".././components/header/H2";
import H3 from ".././components/header/H3";
import Hero from ".././components/hero/Hero.jsx";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />

        <H1 />
        <H3 />
        <H2 />
        <Hero />
         
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
