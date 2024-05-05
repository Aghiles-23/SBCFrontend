import {
  Box,
  CircularProgress,
  Container,
  CssBaseline,
  IconButton,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { ColorModeContext, useMode } from ".././theme";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import H1 from ".././components/header/H1";
import H2 from ".././components/header/H2";
import React from "react";

import Dialog from "@mui/material/Dialog";

import { Close } from "@mui/icons-material";
import BankDetails from "./BankDetails";
import { useGetbankByNameQuery } from ".././Redux/bank";

function App() {
  const { data, error, isLoading } = useGetbankByNameQuery("banks?populate=*");
  console.log(data);

  const [theme, colorMode] = useMode();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <ColorModeContext.Provider
        // @ts-ignore
        value={colorMode}
      >
        <ThemeProvider
          // @ts-ignore
          theme={theme}
        >
          <CssBaseline />
          <H1 />
          <H2 />
          <Container>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
            >
              {data.data.map((item) => (
                <Card
                  onClick={handleClickOpen}
                  key={item}
                  component={motion.section}
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ duration: 1.8, type: "spring", stiffness: 70 }}
                  sx={{
                    minWidth: "350px",
                    cursor: "pointer",
                    backgroundColor:
                      // @ts-ignore
                      theme.palette.mode === "light"
                        ? // @ts-ignore
                          theme.palette.myColor.main
                        : // @ts-ignore
                          theme.palette.bg.main,
                    maxWidth: 333,
                    mt: 6,
                    ":hover .MuiCardMedia-root": {
                      scale: "1.13",
                      transition: "0.4s",
                    },
                  }}
                >
                  <CardMedia
                    onClick={handleClickOpen}
                    sx={{ height: 240, cursor: "pointer" }}
                    // @ts-ignore
                    image={`${import.meta.env.VITE_BASE_URL}${
                      item.attributes.BankImg.data.attributes.url
                    }`}
                    title={item.attributes.Title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      // @ts-ignore
                      sx={{ color: theme.palette.text.primary }}
                    >
                      {item.attributes.Title}
                    </Typography>
                    {/*<Typography variant="body2" color="inherit">
                      {item.attributes.Description}
                  </Typography>*/}
                    {/*<a href={item.attributes.WebSite}> {item.attributes.WebSite} </a>*/}
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={handleClickOpen}
                      sx={{ borderWidth: "1.4px" }}
                      variant="outlined"
                      endIcon={<SendIcon />}
                    >
                      Voir Plus
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Stack>

            <Dialog
              sx={{
                ".MuiPaper-root": {
                  minWidth: { xs: "100%", md: "1000px" },
                  minHeight: { xs: "50%", md: "60%" },
                },
              }}
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <IconButton
                sx={{
                  ":hover": {
                    color: "red",
                    rotate: "180deg",
                    transition: "0.3s",
                  },
                  position: "absolute",
                  top: 0,
                  right: 10,
                }}
                onClick={handleClose}
              >
                <Close />
              </IconButton>

              <BankDetails />
            </Dialog>
          </Container>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }
}

export default App;
