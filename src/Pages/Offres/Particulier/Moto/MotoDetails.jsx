/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";

const MotoDetails = ({ clickedOffer }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",

        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex", alignContent: "center" ,alignItems:"center",mt:7,ml:2}}>
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
            sx={{ fontWeight: "800px", color: "#068548",   }}
          >
            {clickedOffer.attributes.Titre}
          </Typography>
        </Box>
        <Typography
          sx={{ maxWidth: "400px", overflowWrap: "break-word", fontSize:"18px", mt:3, mb:4 }}
          my={0.4}
          fontSize={"22px"}
          color={"inherit"}
          variant="h2"
        >
          {clickedOffer.attributes.DescriptionEtConditions}
        </Typography>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#068548",ml:15 }} // Style du bouton
          onClick={() => {
            {
              window.open(clickedOffer.attributes.Simulation, "_blank");
            }
          }}
        >
          Site Officiel
        </Button>
      </Box>
    </Box>
  );
};

export default MotoDetails;
