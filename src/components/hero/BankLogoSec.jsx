import { Box, Grid, Typography } from "@mui/material";

const BankLogosSection = () => {
  return (
    <Box maxHeight={300} width="100%" mx="auto" my={4} overflow="auto" mb={10}>
        <Typography
                sx={{
                  fontFamily: "Acme",
                  fontWeight: { xs: 600, sm: 800 },
                  textAlign: "center",
                  mb: 4,
                  // @ts-ignore
                 // color: theme.palette.text.primary,
                }}
                variant="h3"
              >
                        Parmi nos partenaires

              </Typography>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        xs={5.9}
        sm={24}
        md={30}
        //overflowX="auto"
      >
         
        
        
        <Grid item>
          <img
            src="src/components/img/LogoBank/BNA.png"
            alt="Bank 1"
            style={{ maxWidth: "50%", height: "auto" }}
          />
        </Grid>
        <Grid item>
          <img
            src="src/components/img/LogoBank/CPA.png"
            alt="Bank 2"
            style={{ maxWidth: "50%", height: "auto" }}
          />
        </Grid>{" "}
        <Grid item>
          <img
            src="src/components/img/LogoBank/CNEP.png"
            alt="Bank 1"
            style={{ maxWidth: "50%", height: "auto" }}
          />
        </Grid>
        <Grid item>
          <img
            src="src/components/img/LogoBank/BADR.png"
            alt="Bank 1"
            style={{ maxWidth: "50%", height: "auto" }}
          />
        </Grid>
        <Grid item>
          <img
            src="src/components/img/LogoBank/BDL.png"
            alt="Bank 2"
            style={{ maxWidth: "50%", height: "auto" }}
          />
        </Grid>{" "}
       
        <Grid item>
          <img
            src="src/components/img/LogoBank/BEA.png"
            alt="Bank 2"
            style={{ maxWidth: "50%", height: "auto" }}
          />
        </Grid>{" "}
      {/*   <Grid item>
          <img
            src="src/components/img/LogoBank/BNA.png"
            alt="Bank 1"
            style={{ maxWidth: "50%", height: "120%" }}
          />
        </Grid>
        <Grid item>
          <img
            src="src/components/img/LogoBank/CPA.png"
            alt="Bank 2"
            style={{ maxWidth: "50%", height: "auto" }}
          />
        </Grid>{" "}
        <Grid item>
          <img
            src="src/components/img/LogoBank/BNA.png"
            alt="Bank 1"
            style={{ maxWidth: "50%", height: "auto" }}
          />
        </Grid>
        <Grid item>
          <img
            src="src/components/img/LogoBank/CPA.png"
            alt="Bank 2"
            style={{ maxWidth: "50%", height: "auto" }}
          />
        </Grid>{" "}
        <Grid item>
          <img
            src="src/components/img/LogoBank/BNA.png"
            alt="Bank 1"
            style={{ maxWidth: "50%", height: "auto" }}
          />
        </Grid>
        <Grid item>
          <img
            src="src/components/img/LogoBank/CPA.png"
            alt="Bank 2"
            style={{ maxWidth: "50%", height: "auto" }}
          />
        </Grid>{" "}
        <Grid item>
          <img
            src="src/components/img/LogoBank/BNA.png"
            alt="Bank 1"
            style={{ maxWidth: "50%", height: "auto" }}
          />
        </Grid>
        <Grid item>
          <img
            src="src/components/img/LogoBank/CPA.png"
            alt="Bank 2"
            style={{ maxWidth: "50%", height: "auto" }}
          />
            </Grid>*/}
        {/* Ajoutez les autres logos de la même manière */}
      </Grid>
    </Box>
  );
};

export default BankLogosSection;
