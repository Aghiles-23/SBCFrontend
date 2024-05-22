import { Box, Typography, ThemeProvider, CssBaseline } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Importez le module Autoplay

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css"; // Créez ce fichier pour vos styles personnalisés

import { ColorModeContext, useMode } from "../../theme";

const servicesData = [
  {
    description:
      "Explorez les meilleures offres de crédit automobile pour financer l'achat de votre voiture. Comparez les taux et les conditions pour trouver le prêt auto parfait.",
    image: "src/components/img/hero/Car.png",
  },
  {
    title: "",
    description:
      "Trouvez la carte de crédit qui vous convient le mieux. Comparez les avantages, les taux d'intérêt et les programmes de récompenses pour maximiser vos avantages financiers.",
    image: "src/components/img/hero/CarteCredit.jpg",
  },
  {
    title:
      "Financez votre maison idéale avec des offres de crédit immobilier attractives.",
    description:
      "Découvrez les meilleures offres de crédit immobilier adaptées à vos besoins. Comparez les taux et conditions pour réaliser votre rêve d'achat immobilier.",
    image: "src/components/img/hero/Immobilier.jpg",
  },
  {
    title: "",
    description:
      "Obtenez un crédit à la consommation rapidement et facilement. Comparez les offres pour financer vos projets personnels, qu'il s'agisse d'un voyage, d'une rénovation ou d'un achat important",
    image: "src/components/img/hero/ConsCredit.jpg",
  },
];

const Services = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        sx={{}}
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <Box
          sx={{
            mt: { xs: 20, sm: 0 },
            mb: 10,
            width: "100%",
            padding: { xs: 1, sm: "30px" },
            ml: { xs: "0%", sm: "-0%" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mr: "25%",
              textAlign: "center",
              mb: 4,

              fontWeight: "bold",
              fontFamily: "Acme",
            }}
          >
            Services
          </Typography>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]} // Ajoutez le module Autoplay
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }} // Changez de slide toutes les 3 secondes
          >
            {servicesData.map((service, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "300px", md: "500px" },
                    borderRadius: "15px",
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "30%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.1)", // Overlay with transparency
                      color: "white",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "15px",
                      textAlign: "center",
                      padding: "20px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Outfit",
                        fontSize: { xs: "11px", sm: "24px" },
                        color: "#FFFFFF",
                      }}
                    >
                      {service.description}
                    </Typography>{" "}
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Services;
