/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";


const MotoDetails = ({ clickedOffer }) => {
  const [openFeedback, setOpenFeedback] = useState(false);
  const [openReviews, setOpenReviews] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const item = Cookies.get("user");
    if (item) {
      setIsAuthenticated(true);
      const user = JSON.parse(Cookies.get("user"));
    } else {
      setIsAuthenticated(false);
    }
  }, []);

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
    <Box  //className="border"
      sx={{
        display: "flex",
        alignItems: "center",
        width:"100%",

        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex", alignContent: "center" ,alignItems:"center",mt:5,ml:2}}>
        <img
          width={"70%"}
          height={"80%"}
          // @ts-ignore
          src={`${import.meta.env.VITE_BASE_URL}${
            clickedOffer.attributes.SourceImage.data.attributes.url
          }`}
          alt={clickedOffer.attributes.Title}
        />
      </Box>
      <Box sx={{ py: 0, textAlign: { xs: "center", sm: "left" } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 2.5,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "800px", color: "#068548", mt:2  }}
          >
            {clickedOffer.attributes.Titre}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
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
            }}
          >
            Description et Conditions : &nbsp;
          </Typography>
        </Box>
        <Typography
          sx={{
            maxWidth: "400px",
            overflowWrap: "break-word",
            fontSize: "18px",
            mt: 3,
            mb: 4,
          }}
          my={0.4}
          fontSize={"22px"}
          color={"inherit"}
          variant="h2"
        >
          {clickedOffer.attributes.DescriptionEtConditions}
        </Typography>
         
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
          className="ButtonPref"
          variant="contained"
          sx={{ backgroundColor: "#068548", ml: 0 }}
          onClick={() => {
            window.open(clickedOffer.attributes.Simulation, "_blank");
          }}
        >
          {" "}
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              fontFamily: "Acme",
              textDecoration: "none",
            }}
          >
            Simulation dans le site{" "}
          </Typography>
        </Button>
        {isAuthenticated && (
          <Button
            className="ButtonPref"
            variant="contained"
            sx={{ backgroundColor: "#068548", ml: 7 }}
            onClick={handleClickOpenFeedback}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                fontFamily: "Acme",
                textDecoration: "none",
              }}
            >
              Noter
            </Typography>
          </Button>
        )}
        <Button
          className="ButtonPref"
          variant="contained"
          sx={{ backgroundColor: "#068548", ml: 7 }}
          onClick={handleClickOpenReviews}
        > <Typography
        sx={{
          fontWeight: 500,
          fontSize: "14px",
          fontFamily: "Acme",
          textDecoration: "none",
        }}
      >
        Voir retours 
      </Typography>
        </Button>
      </Box>
      </Box>
    </Box>
  );
};

export default MotoDetails;
