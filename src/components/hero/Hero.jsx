import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

const Hero = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", // Pour aligner les éléments sur les côtés
          alignItems: "center", // Pour aligner les éléments verticalement
          gap: 2, // Espacement entre les deux éléments
          paddingTop: 2,
          marginTop: 2.5,
          marginBottom: 10,
        }}
      >
        <Box
          sx={{
            width: "50%", // Pour occuper l'autre moitié de la largeur du conteneur
            paddingLeft: { xs: 2, sm: 4 }, // Ajustements de la marge à gauche selon la taille de l'écran
            textAlign: { xs: "center", sm: "left" }, // Pour aligner le texte au centre sur les petits écrans et à gauche sur les grands écrans
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,

              // @ts-ignore
              color: theme.palette.text.main,
            }}
            variant="h2"
          >
            Simplifier Vos Choix Bancaires
          </Typography>

          <Stack direction="row" alignItems="center" mt={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                color:
                  // @ts-ignore
                  theme.palette.text.main,
              }}
            >
              Trouvez les meilleurs tarifs et offres dans tout le pays <br />
              <br />
            </Typography>
          </Stack>

          <Stack sx={{ mt: 3, display: "block", alignContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                height: "40px",
                width: "150px",
                backgroundColor: "#068548",
                borderRadius: "7px",

                "&:hover": {
                  backgroundColor: "#45a049", // Couleur de fond au survol
                },
              }}
            >
              Comparer
            </Button>
            <Button
              variant="outlined"
              sx={{
                ml: "30px",
                height: "40px",
                width: "250px",
                color: "#068548",
                fontWeight: 540,
                borderRadius: "7px",
                borderColor: "#068548",

                "&:hover": {
                  backgroundColor: "#45a049", // Couleur de fond au survol
                  color: "white",
                  borderColor: "#068548",
                },
              }}
            >
              Afficher les Offres
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "50%", // Pour occuper la moitié de la largeur du conteneur
            position: "relative",
            maxHeight: "1000px",
            overflow: "hidden",
          }}
        >
          <img
            src="src/components/img/Home.jpg"
            alt=""
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
