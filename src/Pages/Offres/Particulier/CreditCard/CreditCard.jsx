import {
  Container,
  Box,
  Typography,
  CircularProgress,
  Grid,
  ThemeProvider,
  CssBaseline,
  Dialog,
  IconButton,
} from "@mui/material";
// @ts-ignore
import { motion } from "framer-motion";
import { useGetbankByNameQuery } from "../../../../Redux/bank";
import { ColorModeContext, useMode } from "../../../../theme";
import Search from "../../../../components/header/Search";
import { useState } from "react";
import Offres from "../OffreHautParticulier";
import H1 from "../../../../components/header/H1";
import Footer from "../../../../components/footer/footer";
import React from "react";
import { Close } from "@mui/icons-material";
import CreditCardDetails from "./CreditCardDetails";
import calculateRating from "../composantsComparaison/calculateRating";
import CreditCardItem from "../composantsComparaison/cartecredit";

function CreditCard() {
  const [theme, colorMode] = useMode();
  const [MyData, setMyData] = useState(`carte-credits?populate=*`);
  const [clickedOffer, setclickedOffer] = useState({});

  const { data, error, isLoading } = useGetbankByNameQuery(MyData);
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
          py: 0,
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
      value={colorMode}>
        <ThemeProvider 
// @ts-ignore
        theme={theme}>
          <CssBaseline />
          <H1 />
          <Offres />
          <Search
            onSearch={(search) => {
              setMyData(
                `carte-credits?populate=*&filters[Titre][$contains]=${search}`
              );
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
                <Grid item key={item.id} xs={5.9} sm={6} md={4}>
                  <CreditCardItem
                    item={item}
                    handleClickOpen={handleClickOpen}
                    setclickedOffer={setclickedOffer}
                    theme={theme}
                    //calculateRating={calculateRating}
                  />
                </Grid>
              ))}
            </Grid>
            <Dialog
              sx={{
                ".MuiPaper-root": {
                  minWidth: { xs: "100%", md: "500px" },
                  minHeight: { xs: "40%", md: "50%" },
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
              <CreditCardDetails clickedOffer={clickedOffer} />
            </Dialog>
          </Container>
          <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }
}

export default CreditCard;
