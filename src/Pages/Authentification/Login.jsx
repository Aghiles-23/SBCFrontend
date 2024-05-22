// Login.jsx

import { useState } from "react";
import PropTypes from "prop-types";

import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { storeUser } from "../../axios/helpers";
import { LoginUrl } from "../../axios/Apitokens";

import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const initialUser = { identifier: "", password: "",avatar:"" };

const Login = ({ onLogin }) => {


  
  // Ajouter la prop onLogin
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(LoginUrl, user);
        if (data.jwt) {
          storeUser(data);
          toast.success("Connexion avec succès!", {
            hideProgressBar: true,
            autoClose:1500,
          });
          console.log(data);
          setUser(initialUser);
          // Appeler la fonction de mise à jour de l'état d'authentification
          onLogin(true);
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
        autoClose:1500,

      });
    }
  };

  return (
    <Stack
      sx={{
        display: "flex",
        direction: "column",
        gap: 1,
        justifyContent: "center",
        width: "80%",
        ml: "20%",
        mt: 3,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "30px",
            fontFamily: "Acme",
            textDecoration: "none",
            ml: "8%",
          }}
        >
          Se Connecter{" "}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", direction: "column", gap: 3 }}>
        <form>
          <Box sx={{ mb: 10, height: "5px", width: "100%" }}>
            <TextField
              label="Email"
              type="email"
              name="identifier"
              value={user.identifier}
              onChange={handleChange}
              placeholder="Enter your email"
              margin="normal"
            />
          </Box>

          <Box sx={{ mb: 10, height: "5px", width: "100%" }}>
            <TextField
              label="Password"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </Box>
          <Button
            className="ButtonPref"
            sx={{
              fontFamily: "Acme",
              backgroundColor: "#068548",
              color: "#FFFFFF",
              width: "100%",
              mb: "5",
              "&:hover": {
                backgroundColor: "#ffffff",
                // @ts-ignore
                color: "#068548",
              },
            }}
            onClick={handleLogin}
          >
            Se connecter
          </Button>

          <Divider sx={{ mt: 2, mb: 2, width: "80%", ml: "10%" }} />
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "13px",
              fontFamily: "Acme",
              textDecoration: "none",
              ml: "20%",
            }}
          >
            Vous n&apos;avez pas de compte ?
          </Typography>
          <Box sx={{ ml: "35%", mt: -2.8 }}>
            <h5>
              Cliquez <Link to="/signup">ici</Link>
            </h5>
          </Box>
        </form>
      </Box>
    </Stack>
  );
};
Login.propTypes = {
  onLogin: PropTypes.func.isRequired, // 'onLogin' doit être une fonction et obligatoire
};
export default Login;
