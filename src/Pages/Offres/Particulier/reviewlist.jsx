/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  Rating,
  Grid,
  Dialog,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import axios from "axios";

let list = [];

const getReviews = async (id, type) => {
  let url = "http://localhost:1337/api/reviews?populate=*";
  if (url) {
    try {
      const response = await axios.get(url);
      let filteredData = [];
      if (type === "creditcard") {
        filteredData = response.data.data.filter(
          (item) =>
            item.attributes.carte_credit.data !== null &&
            item.attributes.carte_credit.data.id === id
        );
      } else {
        filteredData = response.data.data.filter(
          (item) =>
            item.attributes.credit_automobile.data !== null &&
            item.attributes.credit_automobile.data.id === id
        );
      }
      list = filteredData;
      console.log(id);
      console.log(filteredData);
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
    }
  } else {
    console.error("Aucune URL correspondante trouvée pour le subtype:");
  }
};

const ReviewsList = ({ open, handleClose, idOffer, type }) => {
  console.log(idOffer);
  getReviews(idOffer, type);
  return (
    <Dialog open={open} onClose={handleClose} sx={{ width: "79%", ml: "10%" }}>
      <DialogTitle>
        {" "}
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "30px",
            fontFamily: "Acme",
            textDecoration: "none",
            ml: "0%",
            mt: 1,
          }}
        >
          Reviews
        </Typography>
      </DialogTitle>
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
      <Box mt={4} sx={{ width: "580px", paddingX: 3 }}>
        {list.map((review) => (
          <Card key={review.id} sx={{ mb: 3, gap: 3 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar
                    src={review.avatarUrl}
                    alt={
                      review.attributes.users_permissions_user.data?.attributes
                        .username
                    }
                  />
                </Grid>
                <Grid item xs>
                  <Typography variant="h6">
                    {
                      review.attributes.users_permissions_user.data?.attributes
                        .username
                    }
                  </Typography>
                  <Rating value={review.attributes.note} readOnly />
                  <Typography variant="body1">
                    {review.attributes.comment}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Dialog>
  );
};

export default ReviewsList;
