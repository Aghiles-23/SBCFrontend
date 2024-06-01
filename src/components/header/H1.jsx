// H1.jsx
import { useContext, useEffect, useRef, useState } from "react";
import { ColorModeContext } from "../../theme";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  Stack,
  Typography,
  Avatar,
  useTheme,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Close,
  DarkModeOutlined,
  LightModeOutlined,
} from "@mui/icons-material";
import SignUpIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import LoginClient from "../../Pages/Authentification/LoginUser";
import LoginBank from "../../Pages/Authentification/LoginBank";
import Logout from "../../Pages/Authentification/Logout";
import Cookies from "js-cookie";

const H1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [bank, setBank] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [userType, setUserType] = useState("");

  const handleLogin = (isLoggedIn) => {
    setIsAuthenticated(isLoggedIn);
    if (isLoggedIn) {
      const user = JSON.parse(Cookies.get("user"));
      setAvatarUrl(
        user?.avatar
          ? `http://localhost:1337${user.avatar}`
          : "src/components/img/Avatar/doctor.png"
      );
    }
  };

  useEffect(() => {
    const item = Cookies.get("user");
    if (item) {
      setIsAuthenticated(true);
      const user = JSON.parse(Cookies.get("user"));
      setAvatarUrl(
        user?.avatar
          ? `http://localhost:1337${user.avatar}`
          : "src/components/img/Avatar/doctor.png"
      );
      if (user && user.username) {
        // Si "username" existe, mettre la variable à false
        setBank(false);
      } else {
        // Sinon, mettre la variable à true
        setBank(true);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    Logout();
    window.location.reload();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUserType("");
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setAnchorEl(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
                  window.location.reload();
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
                  window.location.reload();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "16px" }} />
              </IconButton>
            )}
          </div>

          {isAuthenticated ? (
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              ref={menuRef}
            >
              <Button
                sx={{ height: 40 }}
                onClick={handleClick}

                // component={Link}
                // to="/banques/dashboard"
                // disabled={!bank}
              >
                {" "}
                <Avatar alt="User" src={avatarUrl} />
                <Menu
                  id="avatar-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem
                    onClick={handleClose}
                    component={bank ? Link : "div"} // Utilisation conditionnelle du composant pour la navigation
                    to="/banques/dashboard"
                  >
                    <AccountCircleIcon sx={{ mr: 1 }} />
                    Mon Profil
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={Link}
                    to="/mes-coordonnees"
                  >
                    <LocationOnIcon sx={{ mr: 1 }} />
                    Mes Coordonnées
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ExitToAppIcon sx={{ mr: 1, color: "#DF0C0F" }} />
                    Déconnexion
                  </MenuItem>
                </Menu>
              </Button>
              {/* <Button
                variant="contained"
                className="ButtonPref"
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
              </Button> */}
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
              {!userType ? (
                <Box sx={{ p: 3 }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "24px",
                      fontFamily: "Acme",
                      textAlign: "center",
                      mb: 2,
                    }}
                  >
                    Choisir le type de connexion
                  </Typography>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Vous êtes:</FormLabel>
                    <RadioGroup
                      aria-label="user-type"
                      name="userType"
                      value={userType}
                      onChange={handleUserTypeChange}
                    >
                      <FormControlLabel
                        value="client"
                        control={<Radio />}
                        label="Client"
                      />
                      <FormControlLabel
                        value="banque"
                        control={<Radio />}
                        label="Banque"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              ) : userType === "client" ? (
                <LoginClient onLogin={handleLogin} />
              ) : (
                <LoginBank onLogin={handleLogin} />
              )}
            </Dialog>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default H1;
