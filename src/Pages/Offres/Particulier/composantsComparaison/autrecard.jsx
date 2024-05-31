import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  CardActions,
  Grid,
  Box,
  Typography,
  Button,
  Stack,
  Rating,
  IconButton,
  Dialog,
} from "@mui/material";
import { motion } from "framer-motion";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Close } from "@mui/icons-material";
import AutoDetails from "../Automobile/AutoDetails";

const AutreCardComponent = ({ item, theme }) => {
  const [clickedOffer, setclickedOffer] = useState({});
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item key={item.id} xs={12} sm={6} md={6}>
      <Card
        onClick={() => {
          handleClickOpen();
          setclickedOffer(item);
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
          width: "100%",
          //height:"100%",
          cursor: "pointer",
          minWidth: { sm: "240px", md: "450px" },
          maxWidth: "580px",
          minHeight: { xs: "200px", md: "300px" },
          maxHeight: { xs: "200px", md: "500px" },
          mt: 2.5,
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
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            //justifyContent: "center",
            height: "100%",
            width: "100%",
            //gap: 1,
          }}
        >
          <Box
            // className={"border"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8.5,
              width: "30%",
              height: "100%",
              ml: 0,
            }}
          >
            <CardMedia
              sx={{
                height: { xs: 61, sm: 100, md: 100 },
                display: "flex",
                justifyContent: "center",
                // height: 140,
                cursor: "pointer",
                width: { xs: "66%", md: "85%" },
                backgroundSize: "cover", // Pour que l'image couvre entièrement la zone
                backgroundPosition: "center",
                mb: 2,
              }}
              // @ts-ignore
              image={`${import.meta.env.VITE_BASE_URL}${
                item.attributes.SourceImage.data.attributes.url
              }`}
              // image="/static/images/cards/contemplative-reptile.jpg"*/
              title={`${item.attributes.Source}`} //{item.attributes.Title}
            />
            <Rating
              size={"small"}
              precision={0.1}
              name="read-only"
              value={3}
              readOnly
              sx={{ ml: -1 }}
            />
          </Box>
          <Box
            // className="border"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "",
              height: "100%",
              width: "100%",

              mt: 0,
            }}
          >
            <CardHeader
              sx={{}}
              title={`${item.attributes.Titre}`}
              titleTypographyProps={{
                fontFamily: "Acme",
                fontWeight: 500, // Police en gras
                fontSize: { xs: "13px", sm: "15px", md: "18px" },
                // mb: 3,
              }}
            />
            <Box sx={{ mt: 0 }}>
              <Box
                sx={{
                  // classname: "border",
                  display: "flex",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <FiberManualRecordIcon sx={{ width: 8, mr: 1, ml: 1.5 }} />
                <Typography
                  variant="body2"
                  color="inherit"
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "11px",
                      md: "13px",
                    },

                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    // @ts-ignore
                    color: theme.palette.elementCard.primary,
                  }}
                >
                  Montant de financement : &nbsp;
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: {
                      xs: "10px",
                      sm: "11px",
                      md: "13px",
                    },
                    fontWeight: 500,
                    // @ts-ignore
                    // color: theme.palette.elementCard.primary,
                  }}
                >
                  {item.attributes.MontantFinancement} DA
                </Typography>
              </Box>
              <Box
                sx={{
                  // classname: "border",
                  display: "flex",
                  alignItems: "center",
                  mt: 0.5,
                }}
              >
                <FiberManualRecordIcon sx={{ width: 8, mr: 1, ml: 1.5 }} />
                <Typography
                  variant="body2"
                  color="inherit"
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: {
                      xs: "10px",
                      sm: "11px",
                      md: "13px",
                    },
                    fontWeight: 600,
                    // @ts-ignore
                    color: theme.palette.elementCard.primary,
                  }}
                >
                  Duree de credit : &nbsp;
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: {
                      xs: "10px",
                      sm: "11px",
                      md: "13px",
                    },
                    fontWeight: 500,
                    // @ts-ignore
                    // color: theme.palette.elementCard.primary,
                  }}
                >
                  {item.attributes.DureeCredit} mois
                </Typography>
              </Box>
              <Box
                sx={{
                  // classname: "border",
                  display: "flex",
                  alignItems: "center",
                  mt: 0.5,
                }}
              >
                <FiberManualRecordIcon sx={{ width: 8, mr: 1, ml: 1.5 }} />
                <Typography
                  variant="body2"
                  color="inherit"
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: {
                      xs: "10px",
                      sm: "11px",
                      md: "13px",
                    },
                    fontWeight: 600,
                    // @ts-ignore
                    color: theme.palette.elementCard.primary,
                  }}
                >
                  Taux d&apos;interets : &nbsp;
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: {
                      xs: "10px",
                      sm: "11px",
                      md: "13px",
                    },
                    fontWeight: 500,
                    // @ts-ignore
                    // color: theme.palette.elementCard.primary,
                  }}
                >
                  {item.attributes.TauxInteret} %
                </Typography>
              </Box>
            </Box>
            <Box // className="border"
              sx={{ mt: 5, ml: "69%" }}
            >
              <Button
                onClick={() => {
                  handleClickOpen();
                  setclickedOffer(item);
                }}
                className="Buttonpref"
                variant="contained"
                sx={{
                  fontFamily: "Acme",
                  // height: "40px",
                  // width: "200px",
                  backgroundColor: "#068548",
                  borderRadius: "7px",
                  color: "white",

                  "&:hover": {
                    backgroundColor: "#068548",
                    // @ts-ignore
                    color: theme.palette.text.main,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: {
                      xs: "9px",
                      sm: "11px",
                      md: "12px",
                    },
                    fontFamily: "Acme",
                    textDecoration: "none",
                  }}
                >
                  Plus de details
                </Typography>
              </Button>
            </Box>
          </Box>
        </Stack>
      </Card>
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

        <AutoDetails clickedOffer={clickedOffer} />
      </Dialog>
    </Grid>
  );
};

export default AutreCardComponent;
