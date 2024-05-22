import {
  Box,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";

const Apropos = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        sx={{ backgroundColor: "#8888" }}
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <Stack
        
         // className="border"
          sx={{
            width: "100%",
            height: "800px",
            ml: 0,
            mb:-40,
            // mt: 10,
            paddingLeft: { xs: 0 },
            textAlign: { xs: "left", sm: "left" },
            justifyContent: "center",
            alignItems: "center",
            overflowX: "hidden" /* Masque le contenu qui dépasse */,
          }}
        >
          <Stack
         // className="border"
            direction="row"
            spacing={2}
            sx={{
              mt: {xs:-20,sm:-30},
              width: "100%",
              maxWidth: "1200px",
              alignItems: "center",
              overflow: "hidden" /* Masque le contenu qui dépasse */,
            }}
          >
            <Box sx={{ flex: 1.3, paddingLeft: { xs: 3 } }}>
              <Typography
                sx={{
                  fontFamily: "Acme",
                  fontWeight: { xs: 600, sm: 800 },
                  textAlign: "center",
                  mb: 4,
                  // @ts-ignore
                  color: theme.palette.text.primary,
                }}
                variant="h3"
              >
                A propos de nous
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "13px", sm: "14px", md: "17px" },
                  // @ts-ignore
                  color: theme.palette.text.secondary,
                }}
              >
                SmartBankChoice est une plateforme en ligne conçue pour
                simplifier le processus de comparaison des offres bancaires.
                Notre objectif est d&apos;aider les utilisateurs à trouver les
                meilleurs tarifs et offres de crédit bancaires dans tout le pays, en leur
                permettant de comparer facilement différentes options. <br />
                Avec SmartBankChoice, vous pouvez explorer une large gamme
                d&apos;offres bancaires, y compris les crédits immobiliers, les
                crédits à la consommation, les cartes de crédit, et bien plus
                encore. Notre plateforme vous fournit les informations
                nécessaires pour prendre des décisions financières éclairées.
                <br />
                <br />
                Que vous recherchiez un prêt hypothécaire avantageux, une carte
                de crédit avec des taux d&apos;intérêt compétitifs, ou
                simplement un crédit bancaire adapté à vos besoins,
                SmartBankChoice est là pour vous aider à naviguer dans le
                paysage bancaire complexe et à trouver les meilleures solutions.
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 0.5,
                overflowX: "hidden" /* Masque le contenu qui dépasse */,
              }}
            >
              <img
                src="src/components/img/hero/About.jpg"
                alt="A propos de nous"
                style={{
                  width: "100%",
                  height: "70%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Stack>
        </Stack>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Apropos;
