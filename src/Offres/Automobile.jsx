import {
  Container,
  Stack,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
  Box,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";

import { useGetbankByNameQuery } from ".././Redux/bank";
import { useMode } from ".././theme";
//import { Search } from "@mui/icons-material";
import Search from ".././components/header/Search";
import { useState } from "react";

//import { useState } from "react";

function Automobile() {
  const [theme] = useMode();
  const [MyData, setMyData] = useState(`carte-credits?populate=*`);

  const { data, error, isLoading } = useGetbankByNameQuery(MyData);
  //const [clickedoffre, setclickedoffre] = useState({});

  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container
        sx={{
          py: 11,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">
          {
            // @ts-ignore
            error.error
          }
        </Typography>

        <Typography variant="h6">Please try again later</Typography>
      </Container>
    );
  }

  if (data) {
    return (
      <Container>
        <Search
          onSearch={(search) => {
            setMyData(
              `carte-credits?populate=*&filters[Titre][$contains]=${search}`
            );
          }}
        />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          {data.data.map((item) => (
            <Card
              elevation={5}
              key={item}
              component={motion.section}
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ duration: 1.8, type: "spring", stiffness: 70 }}
              sx={{
                minWidth: "340px",
                cursor: "pointer",
                maxWidth: "480px",
                minHeight: "600px",
                mt: 6,

                backgroundColor:
                  // @ts-ignore
                  theme.palette.mode === "light"
                    ? // @ts-ignore
                      theme.palette.myColor.main
                    : // @ts-ignore
                      theme.palette.bg.main,
                ":hover ": {
                  //rotate: "1deg",
                  scale: "1.03",
                  transition: "0.4s",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2.5,
                }}
              >
                <CardHeader
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: -3,
                    mt: -1,
                  }}
                  title={`${item.attributes.Titre}`}
                  titleTypographyProps={{
                    fontFamily: "Acme",
                    fontWeight: 500, // Police en gras
                    fontSize: "25px",
                  }}
                  subheader={`${item.attributes.Source}`}
                  subheaderTypographyProps={{
                    fontFamily: "Acme",
                    fontWeight: 600, // Police en gras
                    fontSize: "15px",
                  }}
                />
                <CardMedia
                  //onClick={handleClickOpen},
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    height: 140,
                    cursor: "pointer",
                    width: "70%",
                    backgroundSize: "cover", // Pour que l'image couvre entièrement la zone
                    backgroundPosition: "center",
                    mb: 2,
                  }}
                  // @ts-ignore
                  image={`${import.meta.env.VITE_BASE_URL}${
                    item.attributes.Image.data.attributes.url
                  }`}
                  // image="/static/images/cards/contemplative-reptile.jpg"
                  title="Bonjour" //{item.attributes.Title}
                  //className="border"
                />
                <Divider
                  sx={{
                    width: "90%",
                  }}
                />
                <Typography variant="body2" color="inherit">
                  {" "}
                  *Tarification:
                  {item.attributes.Tarification}
                </Typography>
                {/*<a href={item.attributes.WebSite}> {item.attributes.WebSite} </a>*/}
              </CardContent>
              <CardActions>
                <Grid
                  container
                  justifyContent="flex-end" // Alignement à droite
                  alignItems="flex-end" // Alignement en bas
                  sx={{ position: "absolute", bottom: 4, right: 4 }} // Positionnement absolu en bas à droite
                >
                  <Button
                    sx={{
                      borderWidth: "1.5px",
                      borderRadius: "10px",
                      textDecoration: "none",
                      "&:hover": {
                        backgroundColor: "#45a049", // Couleur de fond au survol
                        color: "white",
                        borderColor: "#068548",
                      },
                    }}
                    variant="outlined"
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "14px",
                        fontFamily: "Acme",
                        textDecoration: "none",
                      }}
                    >
                      Plus de details
                    </Typography>
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          ))}
        </Stack>
      </Container>
    );
  }
}
export default Automobile;
