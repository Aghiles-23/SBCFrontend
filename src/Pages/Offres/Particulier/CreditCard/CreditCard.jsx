import {
  Card,
  Container,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
  Box,
  Typography,
  Divider,
  Grid,
  ThemeProvider,
  CssBaseline,
  Rating,
  Stack,
  IconButton,
  Dialog,
} from "@mui/material";
import { motion } from "framer-motion";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useGetbankByNameQuery } from "../../../../Redux/bank";
import { ColorModeContext, useMode } from "../../../../theme";
//import { Search } from "@mui/icons-material";
import Search from "../../../../components/header/Search";
import { useState } from "react";
import Offres from "../OffreHautParticulier";
import H1 from "../../../../components/header/H1";
import Footer from "../../../../components/footer/footer";
import React from "react";
import { Close } from "@mui/icons-material";
import CreditCardDetails from "./CreditCardDetails";
//import CreditCardDetails from " ./";

//import { useState } from "react";

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

  const calculateRating = (reviews) => {
    if (!Array.isArray(reviews)) {
      console.error("reviews is not an array", reviews);
      return 0; // ou une autre valeur par défaut
    }

    if (reviews.length === 0) {
      return 0; // ou une autre valeur par défaut
    }

    let somme = 0;
    reviews.forEach((item) => {
      somme += item?.attributes?.note || 0;
    });

    return somme / reviews.length;
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
        value={colorMode}
      >
        <ThemeProvider
          //sx={{ backgroundColor: "#8888" }}
          // @ts-ignore
          theme={theme}
        >
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
                  <Card
                    onClick={() => {
                      handleClickOpen();
                      setclickedOffer(item);
                      console.log(item)
                    }}
                    elevation={5}
                    key={item}
                    component={motion.section}
                    layout
                    initial={{ transform: "scale(0)" }}
                    animate={{ transform: "scale(1)" }}
                    transition={{
                      duration: 1.8,
                      type: "spring",
                      stiffness: 70,
                    }}
                    sx={{
                      minWidth: { sm: "240px", md: "300px" },
                      width: "90%",
                      cursor: "pointer",
                      maxWidth: "320px",
                      minHeight: { xs: "200px", md: "600px" },
                      maxHeight: { xs: "92%", md: "600px" },
                      mt: 6,
                      // @ts-ignore
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
                          classname: "border",
                          display: "flex",
                          //alignContent: "start",
                          justifyContent: "flex-start",
                          mt: 2,
                        }}
                      >
                        <CardHeader
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: -3,
                            mt: -1,
                            // @ts-ignore
                            color: theme.palette.text.primary,
                          }}
                          title={`${item.attributes.Titre}`}
                          titleTypographyProps={{
                            fontFamily: "Acme",
                            fontWeight: 500, // Police en gras
                            fontSize: { xs: "15px", sm: "20px", md: "23px" },
                          }}
                          subheader={`${item.attributes.Source}`}
                          subheaderTypographyProps={{
                            // @ts-ignore
                            color: theme.palette.text.primary,

                            fontFamily: "Acme",
                            fontWeight: 600, // Police en gras
                            fontSize: { xs: "10px", sm: "13px", md: "16px" },
                          }}
                        />
                      </Box>
                      <CardMedia
                        sx={{
                          height: { xs: 61, sm: 100, md: 140 },
                          display: "flex",
                          justifyContent: "center",
                          // height: 140,
                          cursor: "pointer",
                          width: { xs: "66%", md: "75%" },
                          backgroundSize: "cover", // Pour que l'image couvre entièrement la zone
                          backgroundPosition: "center",
                          mb: 2,
                        }}
                        // @ts-ignore
                        image={`${import.meta.env.VITE_BASE_URL}${
                          item?.attributes?.Image?.data?.attributes?.url || ""
                        }`}
                        // image="/static/images/cards/contemplative-reptile.jpg"
                        title={`${item.attributes.Source}`} //{item.attributes.Title}
                      />
                      <Divider
                        sx={{
                          width: "90%",
                        }}
                      />
                    </CardContent>
                    <Box sx={{ mb: 8 }}>
                      <Box
                        sx={{
                          classname: "border",
                          display: "flex",
                          alignItems: "center",
                          mt: 2,
                        }}
                      >
                        <FiberManualRecordIcon
                          sx={{ width: 8, mr: 1, ml: 1.5 }}
                        />
                        <Typography
                          variant="body2"
                          color="inherit"
                          sx={{
                            fontSize: { xs: "10px", sm: "11px", md: "13px" },

                            fontFamily: "Montserrat",
                            fontWeight: 600,
                            // @ts-ignore
                            color: theme.palette.elementCard.primary,
                          }}
                        >
                          Tarification : &nbsp;
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Montserrat",
                            fontSize: { xs: "10px", sm: "11px", md: "13px" },
                            fontWeight: 500,
                            // @ts-ignore
                            // color: theme.palette.elementCard.primary,
                          }}
                        >
                          {item.attributes.Tarification} DA
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          classname: "border",
                          display: "flex",
                          alignItems: "center",
                          mt: 0.5,
                        }}
                      >
                        <FiberManualRecordIcon
                          sx={{ width: 8, mr: 1, ml: 1.5 }}
                        />
                        <Typography
                          variant="body2"
                          color="inherit"
                          sx={{
                            fontFamily: "Montserrat",
                            fontSize: { xs: "10px", sm: "11px", md: "13px" },
                            fontWeight: 600,
                            // @ts-ignore
                            color: theme.palette.elementCard.primary,
                          }}
                        >
                          Plafond de retrait : &nbsp;
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Montserrat",
                            fontSize: { xs: "10px", sm: "11px", md: "13px" },
                            fontWeight: 500,
                            // @ts-ignore
                            // color: theme.palette.elementCard.primary,
                          }}
                        >
                          {item.attributes.Tarification} DA
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          classname: "border",
                          display: "flex",
                          alignItems: "center",
                          mt: 0.5,
                        }}
                      >
                        <FiberManualRecordIcon
                          sx={{ width: 8, mr: 1, ml: 1.5 }}
                        />
                        <Typography
                          variant="body2"
                          color="inherit"
                          sx={{
                            fontFamily: "Montserrat",
                            fontSize: { xs: "10px", sm: "11px", md: "13px" },
                            fontWeight: 600,
                            // @ts-ignore
                            color: theme.palette.elementCard.primary,
                          }}
                        >
                          Plafond de paiement : &nbsp;
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Montserrat",
                            fontSize: { xs: "10px", sm: "11px", md: "13px" },
                            fontWeight: 500,
                            // @ts-ignore
                            // color: theme.palette.elementCard.primary,
                          }}
                        >
                          {item.attributes.Tarification} DA
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          classname: "border",
                          display: "flex",
                          alignItems: "center",
                          mt: 0.5,
                        }}
                      >
                        <FiberManualRecordIcon
                          sx={{ width: 8, mr: 1, ml: 1.5 }}
                        />
                        <Typography
                          variant="body2"
                          color="inherit"
                          sx={{
                            fontFamily: "Montserrat",
                            fontSize: { xs: "10px", sm: "11px", md: "13px" },
                            fontWeight: 600,
                            // @ts-ignore
                            color: theme.palette.elementCard.primary,
                          }}
                        >
                          Validité : &nbsp;
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Montserrat",
                            fontSize: { xs: "10px", sm: "11px", md: "13px" },
                            fontWeight: 500,
                            // @ts-ignore
                            // color: theme.palette.elementCard.primary,
                          }}
                        >
                          {item.attributes.Validite} mois
                        </Typography>
                      </Box>
                    </Box>
                    <Divider
                      sx={{
                        width: "90%",
                      }}
                    />
                    <CardActions>
                      <Stack
                        direction={{ md: "row", sm: "row", xs: "column" }}
                        justifyContent={"space-between"}
                        alignContent={"center"}
                        gap={{ xs: 2, sm: 1, md: 0 }}
                        mt={5}
                        flexGrow={1}
                      >
                        <Rating
                          size={"small"}
                          precision={0.1}
                          name="read-only"
                          value={calculateRating(
                            item?.attributes?.reviews?.data || ""
                          )}
                          readOnly
                          sx={{ ml: -1 }}
                        />
                        <Button
                          sx={{
                            //  ml: { xs: "35%", sm: "48%", md: "55%" },
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
                              fontSize: { xs: "9px", sm: "11px", md: "14px" },
                              fontFamily: "Acme",
                              textDecoration: "none",
                            }}
                          >
                            Plus de details
                          </Typography>
                        </Button>
                      </Stack>
                    </CardActions>
                  </Card>
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
              < CreditCardDetails
                clickedOffer={clickedOffer}
              />
              
            </Dialog>
          </Container>
          <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }
}
export default CreditCard;
