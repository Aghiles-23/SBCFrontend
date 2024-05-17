//import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
//import { Outlet } from "react-router-dom";

import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Banques from "./Pages/Banques";
import Offres from "./Pages/Offres";
import CreditCard from "./Offres/CreditCard";
import Automobile from "./Offres/Automobile";
/*import Moto from "./Offres/Moto";
import Immobilier from "./Offres/Immobilier";
import Consommation from "./Offres/Consommation";*/
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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/banques" element={<Banques />}></Route>
          <Route path="/offres" element={<Offres />}></Route>
          <Route path="/offres/cartecredit" element={<CreditCard />}></Route>
          <Route path="/offres/automobile" element={<Automobile />}></Route>
          {/*  <Route path="/offres/immobilier" element={<Immobilier />}></Route>
          <Route path="/offres/moto" element={<Moto />}></Route>
          <Route
            path="/offres/creditconsommation"
            element={<Consommation />}
  ></Route>*/}
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
