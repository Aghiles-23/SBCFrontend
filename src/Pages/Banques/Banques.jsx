import {
  Box,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import Card from "@mui/material/Card";
 import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import H1 from "../../components/header/H1";
import Search from "../../components/header/Search";
import H3 from "../../components/header/Tabs";
import React, { useState } from "react";

import Dialog from "@mui/material/Dialog";

import { Close } from "@mui/icons-material";
import BankDetails from "./BankDetails";
import { useGetbankByNameQuery } from "../../Redux/bank";
import Footer from "../../components/footer/footer";

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
            <Grid
              container
              spacing={2}
              mt={0.5}
              justifyContent="center"
              sx={{ cursor: "pointer" }}
            >
              {data.data.map((item) => (
                <Grid item key={item.id} xs={5.9} sm={6} md={3.9} >
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
                    transition={{ duration: 2, type: "spring", stiffness: 50 }}
                    sx={{
                      minWidth: { sm: "240px", md: "340px" },
                      width: "90%",
                      cursor: "pointer",
                      maxWidth: "430px",
                      minHeight: {xs:"290px",md:"369px"},
                      maxHeight: "430px",
                      mt: 6,
                      backgroundColor:
                        // @ts-ignore
                        theme.palette.mode === "light"
                          ? // @ts-ignore
                            theme.palette.myColor.main
                          : // @ts-ignore
                            theme.palette.bg.main,
                      ":hover ": {
                        //rotate: "1deg",
                        scale: "1.03",
                        transition: "0.4s",
                      },
                    }}
                  >
                    <CardMedia
                      onClick={handleClickOpen}
                      sx={{
                        height: { xs: 151, sm: 200, md: 240 },
                        cursor: "pointer",
                        width: { xs: "100%", sm: "100%", md: "100%" },
                      }}
                      // @ts-ignore
                      image={`${import.meta.env.VITE_BASE_URL}${
                        item.attributes.BankImg.data.attributes.url
                      }`}
                      title={item.attributes.Title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        //variant="h6"
                        component="div"
                        sx={{
                          // @ts-ignore
                          color: theme.palette.text.primary,
                          fontSize: { xs: "13px", sm: "17px", md: "18px" },
                        }}
                      >
                        {item.attributes.Title}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignContent: "flex-end",
                        bottom: 2,
                        right: 2,
                        ml: {xs:"42%",md:"70%"},
                      }}
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
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>

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
