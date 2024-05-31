//import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
//import { Outlet } from "react-router-dom";

import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Banques from "./Pages/Banques/Banques";
//import Login from "./Pages/Authentification/Login";
import SignUp from "./Pages/Authentification/SignUp";
//import Logout from "./Pages/Authentification/Logout";
import Offres from "./Pages/Offres/OffresGeneral";
import CreditCard from "./Pages/Offres/Particulier/CreditCard/CreditCard";
import Credit from "./Pages/Offres/Particulier/CreditCard/CreditCard";
import Dashboard from "./Pages/Banques/Dashboard";

import OffresEntreprise from "./Pages/Offres/Entreprise/OffreEntreprise";
import OffresProfessionel from "./Pages/Offres/Professionel/OffreProfessionel";
import FinancementEntreprise from "./Pages/Offres/Entreprise/Financement";
import ExploitationEntreprise from "./Pages/Offres/Entreprise/Exploitation";
import PrommotionImmobiliereEntreprise from "./Pages/Offres/Entreprise/PromotionImmobiliere";

import Automobile from "./Pages/Offres/Particulier/Automobile/Automobile";
import Moto from "./Pages/Offres/Particulier/Moto/Moto";
// import Immobilier from "./Pages/Offres/Particulier/Immobilier";
// import Consommation from "./Pages/Offres/Particulier/Consommation";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import { ToastContainer } from "react-toastify";
import Comparaison from "./Pages/Comparaison/Comparaison";

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
          {/* <Route path="/logout" element={<Logout />}></Route> */}
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/banques" element={<Banques />}></Route>
          <Route path="/banques/dashboard" element={<Dashboard />}></Route>
          <Route path="/offres" element={<Offres />}></Route>
          <Route path="/comparaison" element={<Comparaison />}></Route>
          <Route path="/offres/cartecredit" element={<CreditCard />}></Route>
          <Route path="/offres/cartecredit" element={<Credit />}></Route>

          <Route
            path="/offresEntreprise"
            element={<OffresEntreprise />}
          ></Route>
          <Route
            path="/offresProfessionel"
            element={<OffresProfessionel />}
          ></Route>
          <Route
            path="/offresEntreprise/Financement"
            element={<FinancementEntreprise />}
          ></Route>
          <Route
            path="/offresEntreprise/Exploitation"
            element={<ExploitationEntreprise />}
          ></Route>
          <Route
            path="/offresEntreprise/PrommotionImmobiliere"
            element={<PrommotionImmobiliereEntreprise />}
          ></Route>

          <Route path="/offres/automobile" element={<Automobile />}></Route>
          <Route path="/offres/moto" element={<Moto />}></Route>
        </Routes>
        <ToastContainer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
