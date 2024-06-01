/* eslint-disable no-unused-vars */
// Login.jsx

import { useState } from "react";
import PropTypes from "prop-types";

import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { storeBank, BankData } from "../../axios/helpers";
import { LoginBanqueUrl } from "../../axios/Apitokens";

import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const initialBank = { identifier: "", password: "" };

const Login = ({ onLogin }) => {
  // Ajouter la prop onLogin
  const [bank, setBank] = useState(initialBank);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setBank((currentBank) => ({
      ...currentBank,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      console.log(bank);
      if (bank.identifier && bank.password) {
        const { data } = await axios.get(LoginBanqueUrl);
        //console.log(data);
        const result = data.data.filter(
          (item) =>
            item.attributes.email === bank.identifier &&
            item.attributes.Password === bank.password
        );
        console.log(result);
        if (result.length === 1) {
          // console.log(data.jwt);
          storeBank(result);
          console.log(BankData());
          toast.success("Connexion avec succès!", {
            hideProgressBar: true,
            autoClose: 1500,
          });
          onLogin(true);

          // setUser(initialUser);
          // Appeler la fonction de mise à jour de l'état d'authentification
          //onLogin(true);
          navigate("/");
        } else {
          toast.error("Connexion echouee verifiez vos coordonnees", {
            hideProgressBar: true,
            autoClose: 1500,
          });
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
        autoClose: 1500,
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
              value={bank.identifier}
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
              value={bank.password}
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
          <Box sx={{ ml: "35%", mt: 0.8 ,mb:3}}>
          <h4>
          Cliquez{" "}
          <Link className="text-xm text-vert  mb-6" to="/login">
            ici
          </Link>
        </h4>
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
