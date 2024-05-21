import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  Stack,
  Tab,
  Tabs,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ColorModeContext, useMode } from "../../theme";

const H3 = () => {
  const [theme, colorMode] = useMode();
  const location = useLocation();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (location.pathname.startsWith("/offres")) {
      setValue("/offres");
    } else {
      setValue(location.pathname);
    }
  }, [location]);

  // @ts-ignore
  // @ts-ignore
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
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
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            mt: 5.7,
            mb: 5,
            // borderBottom: "2px solid green", // Ajout de la bordure en bas
          }}
        >
          {useMediaQuery("(min-width:900px)") && (
            <Box
              sx={{
                width: "100%",
                bgcolor:
                  // @ts-ignore
                  theme.palette.green.main,
              }}
            >
              <Tabs
                //  className="border"
                value={value}
                onChange={handleChange}
                aria-label="secondary tabs example"
                TabIndicatorProps={{
                  sx: {
                    display: "none",
                  },
                }}
                sx={{
                  // mt: 0,
                  ml: { sm: 8, md: "36%" }, // Marge à gauche pour différents breakpoints
                  "& .MuiTab-root": {
                    fontFamily: "Acme",
                    // @ts-ignore
                    bgcolor: theme.palette.green.main,
                    // @ts-ignore
                    color: theme.palette.white.main,
                    // Appliquer des styles aux onglets individuels
                    fontWeight: 600, // Police en gras
                    fontSize: "14px", // Taille de la police
                    //textTransform: "none", // Pas de transformation de texte (tout en minuscules)
                  },
                  "& .Mui-selected": {
                    // @ts-ignore
                    bgcolor: theme.palette.bg.main,
                    // @ts-ignore
                    color: theme.palette.green.main,
                   /* "&::after": {
                      //  mt:"5",
                      content: '" "',
                      position: "absolute",
                      bottom: "-5px", // Adjust the position of the triangle
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 0,
                      height: 0,
                      borderLeft: "10px solid transparent",
                      borderRight: "10px solid transparent",
                      borderBottom: "10px solid white", // Create the inverted triangle
                    },*/
                  },
                }}
              >
                <Tab value="/" label="Home" component={Link} to="/" />
                <Tab
                  value="/banques"
                  label="Banques"
                  component={Link}
                  to="/banques"
                />
                <Tab
                  // className="border"
                  value="/offres"
                  label="Offres de crédit"
                  component={Link}
                  to="/offres"
                />
              </Tabs>
            </Box>
          )}

          {useMediaQuery("(max-width:900px)") && (
            <IconButton
              onClick={toggleDrawer("top", true)}
              // @ts-ignore
              sx={{ color: theme.palette.drawer.main, ml: "90%" }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Drawer
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
            sx={{
              ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
                height: "100%",
                width: "100%",
                // @ts-ignore
                bgcolor: theme.palette.bg.main,
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                mx: "auto",
                mt: 3,
                position: "relative",
                pt: 5,
              }}
            >
              <IconButton
                sx={{
                  ":hover": {
                    color: "red",
                    rotate: "180deg",
                    transition: "0.3s",
                  },
                  position: "absolute",
                  top: 0,
                  right: 10,
                }}
                onClick={toggleDrawer("top", false)}
              >
                <Close />
              </IconButton>

              <Stack
                // className="border"
                direction={"column"}
                alignItems={"center"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Accordion
                  elevation={0}
                  // @ts-ignore
                  defaultExpanded="true"
                  sx={{ bgcolor: "inherit" }}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  ></AccordionSummary>
                  <Button
                    component={Link}
                    to="/"
                    sx={{
                      marginLeft: "35px",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    Home
                  </Button>

                  <Button
                    component={Link}
                    to="/banques"
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    Banques
                  </Button>
                  <Button
                    component={Link}
                    to="/offres"
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    Offres de crédit
                  </Button>
                </Accordion>
              </Stack>
            </Box>
          </Drawer>
        </Stack>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default H3;
