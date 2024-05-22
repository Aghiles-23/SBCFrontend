import {
  Box,
  Button,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import H3 from "../../components/header/Tabs";
import About from "./Apropos";
import Services from "./Services";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import { Link } from "react-router-dom";
import { ColorModeContext, useMode } from "../../theme";
 import BankLogoSec from "./BankLogoSec";

const Hero = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        sx={{ backgroundColor: "#888888" }}
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <Stack
          id="home"
          sx={{
            position: "relative",
            width: "100%",
            height: "700px",
            overflowX: "hidden",
            mb: { xs: 10, sm: 0 },
          }}
        >
          {useMediaQuery("(min-width:1100px)") && (
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "700px",
                overflow: "hidden",
              }}
            >
              <H3 />
              <img
                src="src/components/img/hero/Home.jpg"
                alt=""
                style={{
                  width: "100%",
                  height: "810px",
                  objectFit: "cover",
                  position: "absolute",
                  overflowY: "hidden",
                  top: 0,
                  left: 0,
                  zIndex: -1,
                }}
              />
              <Box
                sx={{
                  width: "50%",
                  paddingLeft: { xs: 2, sm: 10 },
                  textAlign: { xs: "center", sm: "left" },
                  paddingTop: 10,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    // @ts-ignore
                    color: theme.palette.dark.main,
                  }}
                  variant="h3"
                >
                  Simplifier Vos Choix De Crédits Bancaires
                </Typography>

                <Stack direction="row" alignItems="center" mt={3}>
                  <Typography
                    variant="h6"
                    sx={{
                      mt: 1,
                      mb: 5,
                      fontWeight: 400,
                      fontFamily: "Outfit",
                      // @ts-ignore
                      color: theme.palette.dark.main,
                    }}
                  >
                    Avec SmartBankChoice, trouvez et comparez facilement les
                    meilleurs tarifs et offres de crédits bancaires qui vous conviennent à travers
                    tout le pays. <br />
                  </Typography>
                </Stack>

                <Stack
                  sx={{
                    mt: 3,
                    display: "block",
                    alignContent: "center",
                  }}
                >
                  <Button
                    className="Buttonpref"
                    variant="contained"
                    sx={{
                      fontFamily: "Acme",
                      height: "40px",
                      width: "200px",
                      backgroundColor: "#068548",
                      borderRadius: "7px",
                      color: "white",

                      "&:hover": {
                        backgroundColor: "#068548",
                        // @ts-ignore
                        color: theme.palette.white.main,
                      },
                    }}
                  >
                    Comparer les offres
                  </Button>
                  <Button
                    className="ButtonPref"
                    component={Link}
                    to="/offres"
                    variant="outlined"
                    sx={{
                      ml: "30px",
                      height: "40px",
                      width: "230px",
                      color: "#068548",
                      fontWeight: 540,
                      borderRadius: "7px",
                      borderColor: "#068548",
                      fontFamily: "Acme",

                      "&:hover": {
                        backgroundColor: "#068548",
                        color: "#FFFFFF",
                        borderColor: "#068548",
                      },
                    }}
                  >
                    Consulter les Offres
                  </Button>
                </Stack>
              </Box>
            </Box>
          )}
          {useMediaQuery("(max-width:1100px ) ") && (
            <Stack
              sx={{
                display: "flex",
                width: "100%",
                height: "50%",
              }}
            >
              <H3 />
              <Box
                sx={{
                  width: "100%",
                  height: "500px",
                  paddingLeft: { xs: 0, sm: 4 },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <img
                  src="src/components/img/hero/Home.jpg"
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    overflowY: "hidden",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                  }}
                />

                <Box
                  sx={{
                    width: "30%",
                    ml: 3,
                    paddingLeft: { xs: 0 },
                    textAlign: { xs: "left", sm: "left" },
                  }}
                >
                  <Typography
                    sx={{
                      mt: { xs: 0, sm: 3 },
                      fontWeight: 800,
                      // @ts-ignore
                      color: theme.palette.text.main,
                    }}
                    variant="h4"
                  >
                    Simplifier Vos Choix Bancaires
                  </Typography>

                  <Stack direction="row" alignItems="center" mt={3}>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", sm: "19px" },
                        mt: 1,
                        mb: 5,
                        fontWeight: 400,
                        fontFamily: "Outfit",
                        // @ts-ignore
                        color: theme.palette.text.main,
                      }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;Avec SmartBankChoice, il est plus
                      facile de trouver et de comparer les meilleurs tarifs et
                      offres bancaires dans tout le pays. <br />
                    </Typography>
                  </Stack>

                  <Stack
                    sx={{
                      mt: 3,
                      display: "block",
                      alignContent: "center",
                      justifyContent: "center",
                      direction: "column",
                      gap: 3,
                    }}
                  >
                    <Button
                      className="Buttonpref"
                      variant="contained"
                      sx={{
                        fontFamily: "Acme",
                        height: "40px",
                        width: "200px",
                        backgroundColor: "#068548",
                        borderRadius: "7px",
                        color: "white",
                        mb: 1,

                        "&:hover": {
                          backgroundColor: "#068548",
                          // @ts-ignore
                          color: theme.palette.text.main,
                        },
                      }}
                    >
                      Comparer les offres
                    </Button>
                    <Button
                      className="ButtonPref"
                      component={Link}
                      to="/offres"
                      variant="outlined"
                      sx={{
                        ml: { l: "30px" },
                        height: "40px",
                        width: "200px",
                        color: "#068548",
                        fontWeight: 540,
                        borderRadius: "7px",
                        borderColor: "#068548",
                        fontFamily: "Acme",

                        "&:hover": {
                          backgroundColor: "#068548",
                          color: "#FFFFFF",
                          borderColor: "#068548",
                        },
                      }}
                    >
                      Consulter les Offres
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Stack>
          )}
        </Stack>
        <Box id="about">
          <About />
        </Box>
        <Box id="services">
          <Services />
        </Box>
        <Box id="BankLogoSec">
        <BankLogoSec/>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Hero;
