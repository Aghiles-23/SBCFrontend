/* eslint-disable react/prop-types */
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import FeedbackDialog from "../../Feedback/feedback";
import ReviewsList from "../../Feedback/reviewlist";

const AutoDetails = ({ clickedOffer }) => {
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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          mt: "1%",
          ml: 2,
        }}
      >
        <img
          width={"80%"}
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
            sx={{ fontWeight: "800px", color: "#068548" }}
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
            mt: 10,
            mb: 1,
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
            sx={{ backgroundColor: "#068548", ml: 10 }}
            onClick={handleClickOpenFeedback}
          >
            Noter
          </Button>

          <Button
            variant="contained"
            sx={{ backgroundColor: "#068548", ml: 10 }}
            onClick={handleClickOpenReviews}
          >
            Voir comments
          </Button>
        </Box>
        <FeedbackDialog
          open={openFeedback}
          handleClose={handleCloseFeedback}
          idOffer={clickedOffer.id}
          type={"auto"}
        />
        <ReviewsList
          open={openReviews}
          handleClose={handleCloseReviews}
          idOffer={clickedOffer.id}
          type={"automobile"}
        />
      </Box>
    </Box>
  );
};

export default AutoDetails;
