import {
  Box,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { ColorModeContext, useMode } from ".././theme";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import H1 from ".././components/header/H1";
import Search from ".././components/header/Search";
import H3 from ".././components/header/H3";
import React, { useState } from "react";

import Dialog from "@mui/material/Dialog";

import { Close } from "@mui/icons-material";
import BankDetails from "./BankDetails";
import { useGetbankByNameQuery } from ".././Redux/bank";
import Footer from ".././components/footer/footer";

function App() {
  const [MyData, setMyData] = useState(`banks?populate=*`);
  const { data, error, isLoading } = useGetbankByNameQuery(MyData);
  const [clickedBank, setclickedBank] = useState({});

  const [theme, colorMode] = useMode();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container
        sx={{
          py: 11,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">
          {
            // @ts-ignore
            error.error
          }
        </Typography>

        <Typography variant="h6">Please try again later</Typography>
      </Container>
    );
  }

  if (data) {
    return (
      <ColorModeContext.Provider
        // @ts-ignore
        value={colorMode}
      >
        <ThemeProvider
          sx={{ backgroundColor: "#8888" }}
          // @ts-ignore
          theme={theme}
        >
          <CssBaseline />
          <H1 />
          <H3 />
          <Search
            onSearch={(search) => {
              setMyData(`banks?populate=*&filters[Title][$contains]=${search}`);
            }}
          />
          <Container>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
            >
              {data.data.map((item) => (
                <Card
                  onClick={() => {
                    handleClickOpen();
                    setclickedBank(item);
                  }}
                  key={item}
                  component={motion.section}
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(0.999)" }}
                  transition={{ duration: 2, type: "spring", stiffness: 10 }}
                  sx={{
                    minWidth: "300px",
                    cursor: "pointer",
                    backgroundColor:
                      // @ts-ignore
                      theme.palette.mode === "light"
                        ? // @ts-ignore
                          theme.palette.myColor.main
                        : // @ts-ignore
                          theme.palette.bg.main,
                    maxWidth: "320px",
                    mt: 6,
                    ":hover": {
                      transform: "scale(1.2)", // Agrandir la carte au survol
                      transition: "0.4s",
                    },
                    ":hover .MuiCardMedia-root": {
                      scale: "1.13",
                      transition: "0.4s",
                    },
                  }}
                >
                  <CardMedia
                    onClick={handleClickOpen}
                    sx={{ height: 240, cursor: "pointer" }}
                    // @ts-ignore
                    image={`${import.meta.env.VITE_BASE_URL}${
                      item.attributes.BankImg.data.attributes.url
                    }`}
                    title={item.attributes.Title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"

                      // @ts-ignore
                      sx={{ color: theme.palette.text.primary,mb:5 }}
                    >
                      {item.attributes.Title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid
                      container
                      justifyContent="flex-end" // Alignement à droite
                      alignItems="flex-end" // Alignement en bas
                      sx={{ position: "absolute", bottom: 4, right: 4 }} // Positionnement absolu en bas à droite
                    >
                      <Button
                        sx={{
                          borderWidth: "1.5px",
                          borderRadius: "10px",
                          textDecoration: "none",
                          "&:hover": {
                            backgroundColor: "#45a049", // Couleur de fond au survol
                            color: "white",
                            borderColor: "#068548",
                          },
                        }}
                        variant="outlined"
                      >
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: "14px",
                            fontFamily: "Acme",
                            textDecoration: "none",
                          }}
                        >
                          Voir Plus
                        </Typography>
                      </Button>
                    </Grid>
                  </CardActions>
                </Card>
              ))}
            </Stack>

            <Dialog
              sx={{
                ".MuiPaper-root": {
                  minWidth: { xs: "100%", md: "700px" },
                  minHeight: { xs: "40%", md: "40%" },
                  maxWidth: { md: "800px" },
                },
              }}
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
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
                onClick={handleClose}
              >
                <Close />
              </IconButton>

              <BankDetails clickedBank={clickedBank} />
            </Dialog>
          </Container>
          <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }
}

export default App;
