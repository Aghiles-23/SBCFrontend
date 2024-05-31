import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
//import { SignUpUrl } from "../../axios/Apitokens";
import { SignUpBanqueUrl, SignUpUrl } from "../../axios/Apitokens";
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
//import { DataArraySharp } from "@mui/icons-material";

const initialUser = {
  email: "",
  password: "",
  username: "",
  firstName: "",
  lastName: "",
  profilePicture: null,
};
const initialBank = {
  Title: "0",
  email: "",
  Password: "",
  WebSite: "",
  Description: "",
  BankImg: "",
};
const initialImage = null;

const Registration = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  const [Image, setImage] = useState(initialImage);
  const [role, setRole] = useState("");
  const [user, setUser] = useState(initialUser);
  const [bank, setBank] = useState(initialBank);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (role === "client") {
      setUser((currentuser) => ({
        ...currentuser,
        [name]: value,
      }));
    } else {
      setBank((currentbank) => ({
        ...currentbank,
        [name]: value,
      }));
    }
  };
  const handleChangeRole = ({ target }) => {
    const { value } = target;

    setRole(value);
  };
  const signUp = async () => {
    try {
      if (user.username && user.email && user.password) {
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

        const res = await axios.post(SignUpUrl, formData, {
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
  const uploadImage = async (imageFile) => {
    try {
      const formData = new FormData();
      formData.append("files", imageFile);
      console.log(imageFile);
      const res = await axios.post(
        "http://localhost:1337/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      if (res.data && res.data[0]) {
        return res.data[0]; // Adjust based on your API's response
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("Image upload error:", error);
      throw error;
    }
  };
  const signUpbank = async () => {
    console.log(5);
    try {
      if (bank.email && bank.Password && bank.WebSite && bank.Description) {
        const formData = new FormData();
        Object.keys(bank).forEach((key) => {
          formData.append(key, bank[key]);
        });
        console.log(Image);
        const imageUrl = await uploadImage(Image);
        console.log(bank);
        console.log(formData);
        const data = {
          data: {
            Title: bank.Title,
            Description: bank.Description,
            WebSite: bank.WebSite,
            email: bank.email,
            Password: bank.Password,
            BankImg: imageUrl,
          },
        };

        const res = await axios.post(SignUpBanqueUrl, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(res);

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
            {role === "client" && (
              <TextField
                label="Nom d'utilisateur"
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                placeholder="Entrez votre nom complet"
                margin="normal"
                InputProps={{
                  sx: { fontSize: "0.875rem" },
                }}
                sx={{ height: "15%", mb: 1, width: "500%" }}
              />
            )}
            <TextField
              label="Email"
              type="email"
              name="email"
              value={role === "client" ? user.email : bank.email}
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
              name={role === "client" ? "password" : "Password"}
              value={role === "client" ? user.password : bank.Password}
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
                value={role}
                onChange={handleChangeRole}
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
            {role === "client" && (
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
                    value={
                      role === "client" ? user.profilePicture : bank.BankImg
                    }
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

            {role === "banque" && (
              <>
                <TextField
                  label="Site Web"
                  type="text"
                  name="WebSite"
                  value={bank.WebSite}
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
                  name="Description"
                  value={bank.Description}
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
                    onChange={handleFileChange2}
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
        onClick={role === "client" ? signUp : signUpbank}
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
