import { Box , Typography } from "@mui/material";

const BankDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
  
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{display: "flex" , alignContent:"left"}}>
        <img
          width={300}
          height={400}
          src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt=""
        />
      </Box>
      <Box sx={{ py: 0, textAlign: { xs: "center", sm: "left" }}}>
        <Typography variant="h5">BNA</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          gfhghgfhgfhgfhgfhgf <br />dhfjhdvfjhdsvfkvdshfkvdshfvds <br />
        </Typography>
        <Typography variant="body1">fhghfghgfhgfhfghgfhgf <br /><br />fhdvfhvdfhvdskhfvdshkfv</Typography>
      </Box>
    </Box>
  );
};

export default BankDetails;
