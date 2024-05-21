//import React from 'react';
// @ts-ignore
import { Box, Typography, ThemeProvider, CssBaseline } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css"; // Créez ce fichier pour vos styles personnalisés

import { ColorModeContext, useMode } from "../../theme";

const servicesData = [
  {
    title: "Service 1",
    description: "Description du Service 1.",
    image: "src/components/img/Home7.jpg",
  },
  {
    title: "Service 2",
    description: "Description du Service 2.",
    image: "src/components/img/Home8.jpg",
  },
  {
    title: "Service 3",
    description: "Description du Service 3.",
    image: "src/components/img/Home8.jpg",
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
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <Box sx={{ mt:-60,width: "100%", padding: "200px" }}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", mb: 4, fontWeight: "bold" , fontFamily:"Acme"}}
          >
            Services
          </Typography>
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {servicesData.map((service, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "300px", md: "500px" },
                    borderRadius:"15px"
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
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay with transparency
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
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "18px" }}>
                      {service.description}
                    </Typography>
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
