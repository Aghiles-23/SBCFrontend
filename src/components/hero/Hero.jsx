import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery("(max-width: 600px)");
  return (
    <Container>
      {useMediaQuery("(min-width:1000px)") && (
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

            <Stack sx={{ mt: 3, display: "block", alignContent: "center" , }}>
              <Button
              className="myButton"
                variant="contained"
                sx={{
                  fontFamily:"Acme",
                  height: "40px",
                  width: "150px",
                  backgroundColor: "#068548",
                  borderRadius: "7px",
                  color: "white",

                  "&:hover": {
                    backgroundColor: "#45a049",
                    // @ts-ignore
                    color: theme.palette.text.main,
                  },
                }}
              >
                Comparer
              </Button>
              <Button
              className="myButton"
                component={Link}
                to="/offres"
                variant="outlined"
                sx={{
                  ml: "30px",
                  height: "40px",
                  width: "250px",
                  color: "#068548",
                  fontWeight: 540,
                  borderRadius: "7px",
                  borderColor: "#068548",
                 // textDecoration:"none",
                  fontFamily:"Acme",

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
      )}
      {useMediaQuery("(max-width:1000px ) ") && (
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
              variant="h4"
            >
              Simplifier Vos Choix Bancaires
            </Typography>

            <Stack direction="row" alignItems="center" mt={3}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  color:
                    // @ts-ignore
                    theme.palette.text.main,
                }}
              >
                Trouvez les meilleurs tarifs et offres dans tout le pays <br />
                <br />
              </Typography>
            </Stack>

            <Stack
              direction={"column"}
              alignItems={"center"}
              display={"flex"}
              justifyContent={"space-between"}
              sx={{
                mt: 3,
                display: "flex",
                 alignContent: "center",
               }}
            >
              <Button
                variant="contained"
                sx={{
                  height: "40px",
                  width: "150px",
                  backgroundColor: "#068548",
                  borderRadius: "7px",
                  color: "white",
                  mb:2,

                  "&:hover": {
                    backgroundColor: "#45a049",
                    // @ts-ignore
                    color: theme.palette.text.main,
                  },
                }}
              >
                Comparer
              </Button>
              <Button
                component={Link}
                to="/offres"
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
          {!isScreenSmall && (
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
                height: "100%",
                display: "block",
              }}
            />
          </Box>)}
        </Box>
      )}
    </Container>
  );
};

export default Hero;
