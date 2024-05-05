//import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
//import { Outlet } from "react-router-dom";

import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Banques from "./Pages/Banques";
import Offres from "./Pages/Offres";
import ScrollToTop from "./components/Scroll/ScrollToTop";

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
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/banques" element={<Banques />}></Route>
          <Route path="/offres" element={<Offres />}></Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
