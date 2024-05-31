/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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
  } from "@mui/material";
  import { motion } from "framer-motion";
  import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FeedbackDialog from "../feedback";
import ReviewsList from "../reviewlist";
import { useState } from "react";
  
  const CreditCardComponent = ({ clickedOffer, theme }) => {
    const [openFeedback, setOpenFeedback] = useState(false);
  const [openReviews, setOpenReviews] = useState(false);

  const handleClickOpenFeedback = () => {
    setOpenFeedback(true);
  };

  const handleCloseFeedback = () => {
    setOpenFeedback(false);
  };

  const handleClickOpenReviews = () => {
    setOpenReviews(true);
  };

  const handleCloseReviews = () => {
    setOpenReviews(false);
  };
  
    
    
    return (
         <Card
          elevation={5}
          
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
            minWidth: { sm: "150px", md: "200px" },
            width: "100%",
            cursor: "pointer",
            maxWidth: "200px",
            minHeight: { xs: "200px", md: "400px" },
            maxHeight: { xs: "92%", md: "700px" },
            mt: 0,
            overflowY:"auto",
            // backgroundColor:
            //   theme.palette.mode === "light"
            //     ? theme.palette.myColor.main
            //     : theme.palette.bg.main,
            
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
                 // color: theme.palette.text.primary,
                }}
                title={`${clickedOffer.attributes.Titre}`}
                titleTypographyProps={{
                  fontFamily: "Acme",
                  fontWeight: 500,
                  fontSize: { xs: "15px", sm: "20px", md: "23px" },
                }}
                subheader={`${clickedOffer.attributes.Source}`}
                subheaderTypographyProps={{
                  //color: theme.palette.text.primary,
                  fontFamily: "Acme",
                  fontWeight: 600,
                  fontSize: { xs: "10px", sm: "13px", md: "16px" },
                }}
              />
            </Box>
            <CardMedia
              sx={{
                height: { xs: 61, sm: 100, md: 150 },
                display: "flex",
                justifyContent: "center",
                width: { xs: "36%", md: "48%" },
                backgroundSize: "cover",
                backgroundPosition: "center",
                mb: 2,
              }}
              // @ts-ignore
              image={`${import.meta.env.VITE_BASE_URL}${
                clickedOffer?.attributes?.Image?.data?.attributes?.url || ""
              }`}
              title={`${clickedOffer.attributes.Source}`}
            />
            <Divider sx={{ width: "90%" }} />
          </CardContent>
          <Box sx={{ mt: -2 }}>
            <Box
              sx={{
                classname: "border",
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
                  fontSize: { xs: "10px", sm: "11px", md: "13px" },
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  //color: theme.palette.elementCard.primary,
                }}
              >
                Tarification : &nbsp;
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: { xs: "10px", sm: "11px", md: "13px" },
                  fontWeight: 500,
                }}
              >
                {clickedOffer.attributes.Tarification} DA
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
              <FiberManualRecordIcon sx={{ width: 8, mr: 1, ml: 1.5 }} />
              <Typography
                variant="body2"
                color="inherit"
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: { xs: "10px", sm: "11px", md: "13px" },
                  fontWeight: 600,
                 // color: theme.palette.elementCard.primary,
                }}
              >
                Plafond de retrait : &nbsp;
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: { xs: "10px", sm: "11px", md: "13px" },
                  fontWeight: 500,
                }}
              >
                {clickedOffer.attributes.PlafondRetrait} DA
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
              <FiberManualRecordIcon sx={{ width: 8, mr: 1, ml: 1.5 }} />
              <Typography
                variant="body2"
                color="inherit"
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: { xs: "10px", sm: "11px", md: "13px" },
                  fontWeight: 600,
                  //color: theme.palette.elementCard.primary,
                }}
              >
                Plafond de paiement : &nbsp;
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: { xs: "10px", sm: "11px", md: "13px" },
                  fontWeight: 500,
                }}
              >
                {clickedOffer.attributes.PlafondPaiment} DA
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
              <FiberManualRecordIcon sx={{ width: 8, mr: 1, ml: 1.5 }} />
              <Typography
                variant="body2"
                color="inherit"
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: { xs: "10px", sm: "11px", md: "13px" },
                  fontWeight: 600,
                  //color: theme.palette.elementCard.primary,
                }}
              >
                Validité : &nbsp;
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: { xs: "10px", sm: "11px", md: "13px" },
                  fontWeight: 500,
                }}
              >
                {clickedOffer.attributes.Validite} mois
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ width: "90%" ,mt:2}} />
          <Box
          sx={{
            display: "flex",
            direction: "row",
            width: "100%",
            mt: 3,
            mb: 1,
            ml: 2,
            mr: 1,
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "#068548", ml: 0 }}
            onClick={() => {
              window.open(clickedOffer.attributes.Simulation, "_blank");
            }}
          >
            Site Officiel
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#068548", ml: 7 }}
            onClick={handleClickOpenFeedback}
          >
            Noter
          </Button>

          <Button
            variant="contained"
            sx={{ backgroundColor: "#068548", ml: 7 }}
            onClick={handleClickOpenReviews}
          >
            Voir comments
          </Button>
        </Box>
        <FeedbackDialog
          open={openFeedback}
          handleClose={handleCloseFeedback}
          idOffer={clickedOffer.id}
        />
        <ReviewsList
          open={openReviews}
          handleClose={handleCloseReviews}
          idOffer={clickedOffer.id}
          type={"creditcard"}
        />
     {/* / </Box> */}
        </Card>
     );
  };
  
  export default CreditCardComponent;
  