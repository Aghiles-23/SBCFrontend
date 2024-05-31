// @ts-ignore
//import React, { useEffect, useState } from "react";
import {
  Box,
  CssBaseline,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MotorcycleIcon from "@mui/icons-material/MoreHoriz";
import CarIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
//import MoneyIcon from "@mui/icons-material/MoreHoriz";
import { ColorModeContext, useMode } from "../../../theme";
import H1 from "../../../components/header/H1";
import H3 from "../../../components/header/TabsPersonnalise";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "../../../components/footer/footer";

function App() {
  const navigate = useNavigate();
  const [theme, colorMode] = useMode();

  const handleClickOpen1 = (lien) => {
    navigate(lien);
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
        <H3 />

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

        <Box sx={{ width: "100%", mt: 6 }}>
          <Grid
            container
            spacing={2}
            mt={0.5}
            justifyContent="center"
            sx={{ cursor: "pointer" }}
          >
            <Grid item xs={6} sm={4} md={2}>
              <Card
                onClick={() =>
                  handleClickOpen1("/offresEntreprise/Financement")
                }
                elevation={5}
                sx={{
                  height: "90%",
                  // @ts-ignore
                  backgroundColor:
                    // @ts-ignore
                    theme.palette.mode === "light"
                      ? // @ts-ignore
                        theme.palette.myColor.main
                      : // @ts-ignore
                        theme.palette.bg.main,
                  ":hover": {
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
                    Credit Financement
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={4} md={2}>
              <Card
                onClick={() =>
                  handleClickOpen1("/offresEntreprise/Exploitation")
                }
                elevation={5}
                sx={{
                  height: "90%",
                  // @ts-ignore
                  backgroundColor:
                    // @ts-ignore
                    theme.palette.mode === "light"
                      ? // @ts-ignore
                        theme.palette.myColor.main
                      : // @ts-ignore
                        theme.palette.bg.main,
                  ":hover": {
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
                    variant="h6"
                    fontSize={16}
                    fontWeight={600}
                  >
                    Crédit Exploitation
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={4} md={2}>
              <Card
                onClick={() =>
                  handleClickOpen1("/offresEntreprise/PrommotionImmobiliere")
                }
                elevation={5}
                sx={{
                  height: "90%",
                  // @ts-ignore
                  backgroundColor:
                    // @ts-ignore
                    theme.palette.mode === "light"
                      ? // @ts-ignore
                        theme.palette.myColor.main
                      : // @ts-ignore
                        theme.palette.bg.main,
                  ":hover": {
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
                    <HomeIcon fontSize="large" />
                  </Box>
                  <Typography
                    sx={{ px: "25%" }}
                    gutterBottom
                    variant="h5"
                    fontSize={16}
                    fontWeight={600}
                  >
                    Promotion Immobiliere
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={4} md={2}>
              <Card
                onClick={() => handleClickOpen1("/offresEntreprise/Autre")}
                elevation={5}
                sx={{
                  height: "90%",
                  // @ts-ignore
                  backgroundColor:
                    // @ts-ignore
                    theme.palette.mode === "light"
                      ? // @ts-ignore
                        theme.palette.myColor.main
                      : // @ts-ignore
                        theme.palette.bg.main,
                  ":hover": {
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
                  >
                    Autre
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
