import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { SignUpBanqueUrl } from "../../../axios/Apitokens";
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
  Grid,
} from "@mui/material";

const initialUser = {
  email: "",
  password: "",
  siteWeb: "",
  description: "",
  banquePicture: null,
};

const Registration = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

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
    console.log(45);
    try {
      if (user.email && user.password  && user.siteWeb && user.description) {
        const formData = new FormData();
        Object.keys(user).forEach((key) => {
          formData.append(key, user[key]);
        });
        console.log(user);
        console.log(formData);

        // Récupération de l'ID du rôle à partir de Strapi
        // const rolesResponse = await axios.get('http://localhost:1337/roles');
        // const roleData = rolesResponse.data;
        // const role = roleData.find((r) => r.name === user.role);

        // if (!role) {
        //   throw new Error("Rôle non trouvé");
        // }

        // formData.append("role", role.id);

        const res = await axios.post(SignUpBanqueUrl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (res) {
          toast.success("Enregistré avec succès !", {
            hideProgressBar: true,
          });
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
        flexDirection: "column",
        gap: 2, // Espacement vertical entre les éléments
        justifyContent: "center",
        width: "100%",
        maxWidth: "900px", // Largeur maximale du formulaire
        margin: "0 auto", // Centrage horizontal
        mt: 2,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "30px",
            fontFamily: "Acme",
            textDecoration: "none",
            ml: "0%",
            mt: -1,
            mb: -2,
          }}
        >
          Inscription
        </Typography>
      </Box>
      <form>
        <Grid container spacing={3}>
          {/* Colonne des champs existants */}
          <Grid item xs={1} md={1}>
            
            <TextField
              label="Email"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Entrez votre email"
              margin="normal"
              InputProps={{
                sx: { fontSize: "0.875rem", width: "100%" },
              }}
              sx={{ height: "15%", mb: 1, width: "500%" }}
            />
            <TextField
              label="Mot de passe"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Entrez votre mot de passe"
              margin="normal"
              InputProps={{
                sx: { fontSize: "0.775rem" },
              }}
              sx={{ height: "15%", mb: 1, width: "500%" }}
            />
            <FormControl
              fullWidth
              margin="normal"
              sx={{ height: "50px", width: "220px" }}
            >
              <InputLabel id="role-select-label" sx={{ width: 900 }}>
                Sélectionnez votre rôle
              </InputLabel>
              <Select
                labelId="role-select-label"
                name="role"
                value={user.role}
                onChange={handleChange}
                label="Sélectionnez votre rôle"
                inputProps={{
                  sx: { fontSize: "0.875rem" },
                }}
                sx={{ height: "100%", mb: 1, width: "100%", paddingX: "13px" }}
              >
                <MenuItem value="banque">Banque</MenuItem>
                <MenuItem value="client">Client</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Colonne des champs conditionnels */}
          <Grid
            // className="border"
            item
            xs={12}
            md={6}
            sx={{ ml: 40, width: 40 }}
          >
            {user.role === "client" && (
              <>
                <TextField
                  label="Prénom"
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  placeholder="Entrez votre prénom"
                  margin="normal"
                  InputProps={{
                    sx: { fontSize: "0.875rem" },
                  }}
                  sx={{ height: "15%", mr: 1, width: "65%" }}
                />
                <TextField
                  label="Nom"
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  placeholder="Entrez votre nom"
                  margin="normal"
                  InputProps={{
                    sx: { fontSize: "0.875rem" },
                  }}
                  sx={{ height: "15%", mb: 5, width: "65%" }}
                />
                <Typography
                  sx={{
                    fontWeight: 300,
                    fontSize: "15px",
                    fontFamily: "Acme",
                    textDecoration: "none",
                    ml: "0.8%",
                  }}
                >
                  Ajouter une photo de profil ?
                </Typography>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ ml: "45%", mt: -6.5, borderRadius: "5px" }}
                >
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "12px",
                      fontFamily: "Acme",
                      textDecoration: "none",
                    }}
                  >
                    Ajouter
                  </Typography>
                  <input
                    type="file"
                    hidden
                    name="profilePicture"
                    onChange={handleFileChange1}
                  />
                </Button>
                {selectedImage && (
                  <div style={{ marginTop: "1px" }}>
                    <img
                      src={selectedImage}
                      alt="Profile"
                      style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                )}
              </>
            )}

            {user.role === "banque" && (
              <>
                <TextField
                  label="Site Web"
                  type="text"
                  name="siteWeb"
                  value={user.siteWeb}
                  onChange={handleChange}
                  placeholder="Entrez votre site web"
                  margin="normal"
                  InputProps={{
                    sx: { fontSize: "0.875rem" },
                  }}
                  sx={{ height: "15%", mb: 1, width: "65%" }}
                />
                <TextField
                  label="Description"
                  type="text"
                  name="description"
                  value={user.description}
                  onChange={handleChange}
                  placeholder="Entrez une description"
                  margin="normal"
                  InputProps={{
                    sx: { fontSize: "0.875rem" },
                  }}
                  sx={{ height: "15%", mb: 2.5, width: "65%" }}
                />
                <Typography
                  sx={{
                    fontWeight: 300,
                    fontSize: "15px",
                    fontFamily: "Acme",
                    textDecoration: "none",
                    ml: "0.8%",
                  }}
                >
                  Ajouter une photo de profil ?
                </Typography>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ ml: "45%", mt: -6.5, borderRadius: "5px" }}
                >
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "12px",
                      fontFamily: "Acme",
                      textDecoration: "none",
                    }}
                  >
                    Ajouter
                  </Typography>
                  <input
                    type="file"
                    hidden
                    name="profilePicture"
                    onChange={handleFileChange1}
                  />
                </Button>
                {selectedImage && (
                  <div style={{ marginTop: "1px" }}>
                    <img
                      src={selectedImage}
                      alt="Profile"
                      style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                )}
              </>
            )}
          </Grid>
        </Grid>
      </form>
      <Button
        sx={{
          fontFamily: "Acme",
          backgroundColor: "#068548",
          color: "#FFFFFF",
          width: "30%",
          mt: 2,
          ml: "22%",
          "&:hover": {
            backgroundColor: "#ffffff",
            color: "#068548",
          },
        }}
        onClick={signUp}
      >
        S&apos;inscrire
      </Button>
      <Divider sx={{ mt: 0, mb: 0, width: "60%", ml: "8%" }} />
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "16px",
          fontFamily: "Acme",
          textDecoration: "none",
          ml: "30%",
        }}
      >
        Vous avez déjà un compte ?
      </Typography>
      <Box sx={{ ml: "35%", mt: 0.8 }}>
        <h4>
          Cliquez <Link to="/login">ici</Link>
        </h4>
      </Box>
    </Stack>
  );
};

export default Registration;
