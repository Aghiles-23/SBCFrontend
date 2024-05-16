//import Typography from "@mui/material/Typography";
import {
  Box,
  Card,
  CardContent,
  CssBaseline,
  Grid,
  Tab,
  Tabs,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { ColorModeContext, useMode } from ".././theme";
//import { Outlet } from "react-router-dom";
import H1 from ".././components/header/H1";
import H2 from ".././components/header/H2";
import CreditCard from "../Offres/CreditCard.jsx";

import React from "react";
//import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MotorcycleIcon from "@mui/icons-material/DirectionsBike";
import CarIcon from "@mui/icons-material/DriveEta";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MoneyIcon from "@mui/icons-material/WalletOutlined";

function App() {
  const [theme, colorMode] = useMode();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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

        <Box sx={{ width: "100%", mt: 6  }}>
          <Tabs
           // className="border"
            value={value}
            onChange={handleChange}
            aria-label="secondary tabs example"
            sx={{
              mt: 0,
              width: "100%",
              pl:{sm:5,md:55},
               "& .MuiTab-root": {
                fontFamily: "Acme",

                // Appliquer des styles aux onglets individuels
                fontWeight: 600, // Police en gras
                fontSize: "13px", // Taille de la police
                //textTransform: "none", // Pas de transformation de texte (tout en minuscules)
              },
              "& .Mui-selected": {},
            }}
          >
            <Tab value="one" label="Particulier" />
            <Tab value="two" label="Professionel" />
            <Tab value="three" label="Entreprise" />
          </Tabs>
        </Box>
        <Box>
          <Typography
            gutterBottom
            variant="h6"
            fontSize={20}
            sx={{ mt: 6, ml: 9.5 }}
            fontWeight={600}
            fontFamily={"Acme"}
          >
            {"Categories des offres"}
          </Typography>
        </Box>

        <Grid
          container
          spacing={2}
          mt={0.5}
          justifyContent="center"
          sx={{ cursor: "pointer" }}
        >
          {/* Carte pour la carte de crédit */}
          <Grid item xs={6} sm={4} md={2}>
            <Card
              elevation={5}
              sx={{
                height: "90%",

                backgroundColor:
                  // @ts-ignore
                  theme.palette.mode === "light"
                    ? // @ts-ignore
                      theme.palette.myColor.main
                    : // @ts-ignore
                      theme.palette.bg.main,
                ":hover  ": {
                  scale: "1.03",
                  transition: "0.4s",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#068548",
                  }}
                >
                  <CreditCardIcon fontSize="large" />
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontSize={16}
                  fontWeight={600}
                >
                  Carte de crédit
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Carte pour le crédit immobilier */}
          <Grid item xs={6} sm={4} md={2}>
            <Card
              elevation={5}
              sx={{
                height: "90%",

                backgroundColor:
                  // @ts-ignore
                  theme.palette.mode === "light"
                    ? // @ts-ignore
                      theme.palette.myColor.main
                    : // @ts-ignore
                      theme.palette.bg.main,
                ":hover  ": {
                  scale: "1.03",
                  transition: "0.4s",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2.5,
                }}
              >
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#068548",
                  }}
                >
                  <HomeIcon fontSize="large" />
                </Box>
                <Typography
                  gutterBottom
                  variant="h6"
                  fontSize={16}
                  //sx={{ mt: 2, ml: 0.5 }}
                  fontWeight={600}
                >
                  Crédit immobilier
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Autres cartes... */}
          <Grid item xs={6} sm={4} md={2}>
            <Card
              elevation={5}
              sx={{
                // width: "14%",
                height: "90%",

                backgroundColor:
                  // @ts-ignore
                  theme.palette.mode === "light"
                    ? // @ts-ignore
                      theme.palette.myColor.main
                    : // @ts-ignore
                      theme.palette.bg.main,

                // mt: 6,
                ":hover  ": {
                  scale: "1.03",
                  transition: "0.4s",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#068548",
                  }}
                >
                  <CarIcon fontSize="large" />
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontSize={16}
                  fontWeight={600}
                  // sx={{ mt: 2, ml: 0.5 }}
                >
                  Crédit automobile
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Carte pour le crédit moto */}
          <Grid item xs={6} sm={4} md={2}>
            <Card
              elevation={5}
              sx={{
                height: "90%",
                backgroundColor:
                  // @ts-ignore
                  theme.palette.mode === "light"
                    ? // @ts-ignore
                      theme.palette.myColor.main
                    : // @ts-ignore
                      theme.palette.bg.main,

                // mt: 6,
                //width: "14%",

                ":hover ": {
                  scale: "1.03",
                  transition: "0.4s",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#068548",
                  }}
                >
                  <MotorcycleIcon fontSize="large" />
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontSize={16}
                  fontWeight={600}
                  //  sx={{ mt: 2, ml: 2.9 }}
                >
                  Crédit moto
                </Typography>
              </CardContent>
            </Card>{" "}
          </Grid>

          {/* Carte pour le crédit à la consommation */}
          <Grid item xs={6} sm={4} md={2}>
            <Card
              elevation={5}
              sx={{
                // width: "14%",
                height: "90%",

                backgroundColor:
                  // @ts-ignore
                  theme.palette.mode === "light"
                    ? // @ts-ignore
                      theme.palette.myColor.main
                    : // @ts-ignore
                      theme.palette.bg.main,

                //mt: 6,
                ":hover ": {
                  scale: "1.05",
                  transition: "0.4s",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2.5,
                }}
              >
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#068548",
                  }}
                >
                  <MoneyIcon fontSize="large" />
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontSize={16}
                  fontWeight={600}
                  // sx={{ mt: 2 ,position:"center" }}
                >
                  Crédit à la consommation
                </Typography>
              </CardContent>
            </Card>{" "}
          </Grid>
        </Grid>

        <H2 onSearch={undefined} />
        <CreditCard />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
