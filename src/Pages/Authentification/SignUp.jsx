import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
//import { storeUser } from "../../axios/helpers";
import { SignUpUrl } from "../../axios/Apitokens";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const initialUser = { email: "", password: "", username: "", role: "" };

const Registration = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const signUp = async () => {
    // const SignUpUrl = `http://localhost:1337/api/auth/local/register`;

    try {
      if (user.username && user.email && user.password && user.role) {
        console.log(SignUpUrl);
        const res = await axios.post(SignUpUrl, user);
        if (res) {
          toast.success("Enregistré avec succès !", {
            hideProgressBar: true,
          });
          console.log(res);
          setUser(initialUser);
          navigate("/login");
        }
      } else {
        toast.error("Veuillez remplir tous les champs", {
          hideProgressBar: true,
        });
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.error.message, {
          hideProgressBar: true,
        });
      } else {
        toast.error(error.message, {
          hideProgressBar: true,
        });
      }
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
          Inscription
        </Typography>
      </Box>
      <Box sx={{ display: "flex", direction: "column", gap: 3 }}>
        <form>
          <Box sx={{ mb: 10, height: "1px", width: "100%" }}>
            <TextField
              label="Nom d'utilisateur"
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Entrez votre nom complet"
              margin="normal"
              InputProps={{
                sx: { padding: "5px", fontSize: "0.875rem" }, // Smaller padding and font size
              }}
              sx={{ height: "10px" }} // Adjust the overall height
            />
          </Box>
          <Box sx={{ mb: 10, height: "1px", width: "100%" }}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Entrez votre email"
              margin="normal"
              InputProps={{
                sx: { padding: "1px", fontSize: "0.875rem", width: "100%" }, // Smaller padding and font size
              }}
              sx={{ height: "20px" }} // Adjust the overall height
            />
          </Box>
          <Box sx={{ mb: 10, height: "5px", width: "100%" }}>
            <TextField
              label="Mot de passe"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Entrez votre mot de passe"
              margin="normal"
              InputProps={{
                sx: { padding: "5px", fontSize: "0.775rem" }, // Smaller padding and font size
              }}
              sx={{ height: "30px" }} // Adjust the overall height
            />
          </Box>
          <Box sx={{ mb: 10, height: "5px", width: "100%" }}>
            <FormControl fullWidth margin="normal" sx={{ height: "40px" }}>
              <InputLabel id="role-select-label">
                Sélectionnez votre rôle
              </InputLabel>
              <Select
                labelId="role-select-label"
                name="role"
                value={user.role}
                onChange={handleChange}
                label="Sélectionnez votre rôle"
                inputProps={{
                  sx: { padding: "8px", fontSize: "0.875rem" }, // Smaller padding and font size
                }}
              >
                <MenuItem value="banque">Banque</MenuItem>
                <MenuItem value="client">Client</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            sx={{
              fontFamily: "Acme",
              backgroundColor: "#068548",
              color: "#FFFFFF",
              width: "100%",
              mb: 5,
              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#068548",
              },
            }}
            onClick={signUp}
          >
            S&apos;inscrire
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
            Vous avez déjà un compte ?
          </Typography>
          <Box sx={{ ml: "35%", mt: -2.8 }}>
            <h5>
              Cliquez <Link to="/login">ici</Link>
            </h5>
          </Box>
        </form>
      </Box>
    </Stack>
  );
};

export default Registration;
