import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Button,
  Container,
  Dialog,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Close,
  DarkModeOutlined,
  LightModeOutlined,
} from "@mui/icons-material";
import SignUpIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import React from "react";
import Login from "../../Pages/Authentification/Login";

const H1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //const [anchorEl, setAnchorEl] = useState(null);
  // const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <Box
      sx={{
        bgcolor: "#068548",
        py: "7px",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        width: "100%",
        position: "fixed",
        top: 0,
        mb: "50px",
        zIndex: 999, // Assure que le stack reste au-dessus du contenu
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <a href="/" style={{ textDecoration: "none", cursor: "pointer" }}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 900,
                color: "#fff",
                cursor: "pointer",
                fontFamily: "Acme",
                // Définissez le curseur ici si vous souhaitez qu'il soit pointer
              }}
              variant="body2"
            >
              SmartBankChoice
            </Typography>
          </a>
          <Box flexGrow={3} />

          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "16px" }} />
              </IconButton>
            )}
          </div>

          <Button
            variant="contained"
            className="myButton"
            component={Link}
            to="/login"
            onClick={handleClickOpen}
            sx={{
              backgroundColor: "#FFF9F9",
              color: "#068548",
              ml: 2,
              "&:hover": {
                backgroundColor: "#068548",
                // @ts-ignore
                color: "#ffffff",
              },
            }}
            startIcon={<SignUpIcon />}
          >
            {useMediaQuery("(min-width:500px ) ") && (
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "12px",
                  fontFamily: "Acme",
                  textDecoration: "none",
                }}
              >
                Se connecter
              </Typography>
            )}
          </Button>

          <Dialog
            sx={{
              ".MuiPaper-root": {
                minWidth: { xs: "50%", md: "27%" },
                minHeight: { xs: "auto", md: "auto" },
                maxWidth: { md: "800px" },
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
            <Login />
          </Dialog>
        </Stack>
      </Container>
    </Box>
  );
};

export default H1;
