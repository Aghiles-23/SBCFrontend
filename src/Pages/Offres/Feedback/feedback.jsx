/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Rating,
  Box,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const FeedbackDialog = ({ open, handleClose, idOffer, type }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async () => {
    console.log(7);
    console.log(JSON.parse(Cookies.get("user")));
    console.log(JSON.parse(Cookies.get("user")).id);
    console.log(type);
    try {
      if (rating) {
        let data = null
        switch (type) {
          case "creditcard":
            {
                data = {
                data: {
                  comment: comment,
                  note: rating,
                  users_permissions_user: {
                    id: JSON.parse(Cookies.get("user")).id,
                  },
                  carte_credit: {
                    id: idOffer,
                  },
                },
              };
            }
            break;
          case "auto":
            // code à exécuter si l'expression correspond à valeur2
            {
                data = {
                data: {
                  comment: comment,
                  note: rating,
                  users_permissions_user: {
                    id: JSON.parse(Cookies.get("user")).id,
                  },
                  credit_automobile: {
                    id: idOffer,
                  },
                },
              };
            }
            break;
          // vous pouvez avoir autant de cases que nécessaire
          default:
          // code à exécuter si l'expression ne correspond à aucune des valeurs
        }
        

        console.log(data);

        const res = await axios.post(
          "http://localhost:1337/api/reviews?populate=*",
          data,
          {
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${JSON.parse(Cookies.get("user")).jwt}`,
            },
          }
        );
        console.log(res);

        if (res) {
          toast.success("Enregistré avec succès !", {
            hideProgressBar: true,
          });
          //navigate("/offres/automobile");
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

  const handleSubmitAndClose = () => {
    handleSubmit();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Donner votre avis</DialogTitle>
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
      <DialogContent>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="credit-offer-rating"
            value={rating}
            onChange={handleRatingChange}
          />
        </Box>
        <TextField
          autoFocus
          margin="dense"
          id="comment"
          label="Commentaire"
          type="text"
          fullWidth
          multiline
          rows={4}
          value={comment}
          onChange={handleCommentChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Annuler
        </Button>
        <Button onClick={handleSubmitAndClose} color="primary">
          Envoyer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FeedbackDialog;
