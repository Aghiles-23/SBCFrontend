//import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
//import { Outlet } from "react-router-dom";

import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Banques from "./Pages/Banques/Banques";
//import Login from "./Pages/Authentification/Login";
import SignUp from "./Pages/Authentification/SignUp";
import Logout from "./Pages/Authentification/Logout";
import Offres from "./Pages/Offres/OffresGeneral";
import CreditCard from "./Pages/Offres/Particulier/CreditCard";
import Credit from "./Pages/Offres/Particulier/CreditCard";

import Automobile from "./Pages/Offres/Particulier/Automobile";
/*import Moto from "./Offres/Moto";
import Immobilier from "./Offres/Immobilier";
import Consommation from "./Offres/Consommation";*/
import ScrollToTop from "./components/Scroll/ScrollToTop";
import { ToastContainer } from "react-toastify";

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
          <Route path="/login" element={<Home />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/banques" element={<Banques />}></Route>
          <Route path="/offres" element={<Offres />}></Route>
          <Route path="/offres/cartecredit" element={<CreditCard />}></Route>
          <Route path="/offres/cartecredit" element={<Credit />}></Route>

          <Route path="/offres/automobile" element={<Automobile />}></Route>
        </Routes>
        <ToastContainer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
