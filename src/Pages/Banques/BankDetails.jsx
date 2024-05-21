/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";

const BankDetails = ({ clickedBank }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",

        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex", alignContent: "left" }}>
        <img
          width={300}
          height={300}
          // @ts-ignore
          src={`${import.meta.env.VITE_BASE_URL}${
            clickedBank.attributes.BankImg.data.attributes.url
          }`}
          alt={clickedBank.attributes.Title}
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
            {clickedBank.attributes.Title}
          </Typography>
        </Box>
        <Typography
          sx={{ maxWidth: "400px", overflowWrap: "break-word", fontSize:"18px", mt:3, mb:4 }}
          my={0.4}
          fontSize={"22px"}
          color={"inherit"}
          variant="h2"
        >
          {clickedBank.attributes.Description}
        </Typography>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#068548",ml:15 }} // Style du bouton
          onClick={() => {
            {
              window.open(clickedBank.attributes.WebSite, "_blank");
            }
          }}
        >
          Site Officiel
        </Button>
      </Box>
    </Box>
  );
};

export default BankDetails;
