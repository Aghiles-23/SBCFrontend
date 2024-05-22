// H1.jsx
import { useContext, useEffect, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  Stack,
  Typography,
  Avatar,
  useTheme,
} from "@mui/material";
import {
  Close,
  DarkModeOutlined,
  LightModeOutlined,
} from "@mui/icons-material";
import SignUpIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
 import Login from "../../Pages/Authentification/Login";
//import Logout from "../../Pages/Authentification/Logout";

const H1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleLogin = (isLoggedIn) => {
    setIsAuthenticated(isLoggedIn);
    if (isLoggedIn) {
      const user = JSON.parse(localStorage.getItem("user"));
      setAvatarUrl(
        user?.avatar?.url
          ? `http://localhost:1337${user.avatar.url}`
          : "src/components/img/Avatar/doctor.png"
      );
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const isLoggedIn = !!user;
    setIsAuthenticated(isLoggedIn);
    if (isLoggedIn) {
      setAvatarUrl(
        user?.avatar?.url
          ? `http://localhost:1337${user.avatar.url}`
          : "src/components/img/Avatar/doctor.png"
      );
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    // Autres actions de déconnexion
    window.location.reload(); // Recharge la page pour mettre à jour l'état d'authentification
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        bgcolor: "#068548",
        py: "5px",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        width: "100%",
        position: "fixed",
        top: 0,
        mb: "50px",
        zIndex: 999,
      }}
    >
      <Stack sx={{ width: "99.1%" }}>
        <Stack direction={"row"} alignItems={"center"}>
          <a href="/" style={{ textDecoration: "none", cursor: "pointer" }}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 900,
                color: "#fff",
                cursor: "pointer",
                fontFamily: "Acme",
                ml: "10%",
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

          {isAuthenticated ? (
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar alt="User" src={avatarUrl} />
              <Button
                variant="contained"
                className="ButtonPref"
                component={Link}
                to="/login"
                onClick={handleLogout}
                sx={{
                  backgroundColor: "#FFF9F9",
                  color: "#068548",
                  mr: -10,
                  px: -50,
                  "&:hover": {
                    backgroundColor: "#068548",
                    color: "#ffffff",
                  },
                }}
                startIcon={<LogoutIcon />}
              >
                <Typography
                  sx={{
                    paddingX: -10,
                    ml: -0.5,
                    fontWeight: 700,
                    fontSize: "10px",
                    fontFamily: "Acme",
                    textDecoration: "none",
                  }}
                >
                  Déconnecter
                </Typography>
              </Button>
            </Stack>
          ) : (
            <Button
              variant="contained"
              className="myButton"
              onClick={handleClickOpen}
              sx={{
                backgroundColor: "#FFF9F9",
                color: "#068548",
                ml: 2,
                "&:hover": {
                  backgroundColor: "#068548",
                  color: "#ffffff",
                },
              }}
              startIcon={<SignUpIcon />}
            >
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
            </Button>
          )}
          {!isAuthenticated && (
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
              <Login onLogin={handleLogin} />
            </Dialog>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default H1;
