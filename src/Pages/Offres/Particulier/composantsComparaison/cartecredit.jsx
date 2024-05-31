/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  CardActions,
  Grid,
  Box,
  Typography,
  Button,
  Stack,
  Rating,
} from "@mui/material";
import { motion } from "framer-motion";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const CreditCardComponent = ({ item, theme }) => {
  const [clickedOffer, setclickedOffer] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const calculateRating = (reviews) => {
    if (!Array.isArray(reviews)) {
      console.error("reviews is not an array", reviews);
      return 0; // ou une autre valeur par défaut
    }

    if (reviews.length === 0) {
      return 0; // ou une autre valeur par défaut
    }

    let somme = 0;
    reviews.forEach((item) => {
      somme += item?.attributes?.note || 0;
    });

    return somme / reviews.length;
  };
  
  return (
    <Grid item xs={12} sm={6} md={4} key={item.id}>
      <Card
        elevation={5}
        onClick={() => {
          handleClickOpen();
          setclickedOffer(item);
        }}
        component={motion.section}
        layout
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
        transition={{
          duration: 1.8,
          type: "spring",
          stiffness: 70,
        }}
        sx={{
          minWidth: { sm: "240px", md: "300px" },
          width: "100%",
          cursor: "pointer",
          maxWidth: "320px",
          minHeight: { xs: "200px", md: "600px" },
          maxHeight: { xs: "92%", md: "600px" },
          mt: 6,
          backgroundColor:
            theme.palette.mode === "light"
              ? theme.palette.myColor.main
              : theme.palette.bg.main,
          ":hover ": {
            scale: "1.03",
            transition: "0.4s",
          },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2.5,
          }}
        >
          <Box
            sx={{
              classname: "border",
              display: "flex",
              justifyContent: "flex-start",
              mt: 2,
            }}
          >
            <CardHeader
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mb: -3,
                mt: -1,
                color: theme.palette.text.primary,
              }}
              title={`${item.attributes.Titre}`}
              titleTypographyProps={{
                fontFamily: "Acme",
                fontWeight: 500,
                fontSize: { xs: "15px", sm: "20px", md: "23px" },
              }}
              subheader={`${item.attributes.Source}`}
              subheaderTypographyProps={{
                color: theme.palette.text.primary,
                fontFamily: "Acme",
                fontWeight: 600,
                fontSize: { xs: "10px", sm: "13px", md: "16px" },
              }}
            />
          </Box>
          <CardMedia
            sx={{
              height: { xs: 61, sm: 100, md: 140 },
              display: "flex",
              justifyContent: "center",
              width: { xs: "66%", md: "75%" },
              backgroundSize: "cover",
              backgroundPosition: "center",
              mb: 2,
            }}
            // @ts-ignore
            image={`${import.meta.env.VITE_BASE_URL}${
              item?.attributes?.Image?.data?.attributes?.url || ""
            }`}
            title={`${item.attributes.Source}`}
          />
          <Divider sx={{ width: "90%" }} />
        </CardContent>
        <Box sx={{ mb: 8 }}>
          <Box
            sx={{
              classname: "border",
              display: "flex",
              alignItems: "center",
              mt: 2,
            }}
          >
            <FiberManualRecordIcon sx={{ width: 8, mr: 1, ml: 1.5 }} />
            <Typography
              variant="body2"
              color="inherit"
              sx={{
                fontSize: { xs: "10px", sm: "11px", md: "13px" },
                fontFamily: "Montserrat",
                fontWeight: 600,
                color: theme.palette.elementCard.primary,
              }}
            >
              Tarification : &nbsp;
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "10px", sm: "11px", md: "13px" },
                fontWeight: 500,
              }}
            >
              {item.attributes.Tarification} DA
            </Typography>
          </Box>
          <Box
            sx={{
              classname: "border",
              display: "flex",
              alignItems: "center",
              mt: 0.5,
            }}
          >
            <FiberManualRecordIcon sx={{ width: 8, mr: 1, ml: 1.5 }} />
            <Typography
              variant="body2"
              color="inherit"
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "10px", sm: "11px", md: "13px" },
                fontWeight: 600,
                color: theme.palette.elementCard.primary,
              }}
            >
              Plafond de retrait : &nbsp;
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "10px", sm: "11px", md: "13px" },
                fontWeight: 500,
              }}
            >
              {item.attributes.PlafondRetrait} DA
            </Typography>
          </Box>
          <Box
            sx={{
              classname: "border",
              display: "flex",
              alignItems: "center",
              mt: 0.5,
            }}
          >
            <FiberManualRecordIcon sx={{ width: 8, mr: 1, ml: 1.5 }} />
            <Typography
              variant="body2"
              color="inherit"
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "10px", sm: "11px", md: "13px" },
                fontWeight: 600,
                color: theme.palette.elementCard.primary,
              }}
            >
              Plafond de paiement : &nbsp;
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "10px", sm: "11px", md: "13px" },
                fontWeight: 500,
              }}
            >
              {item.attributes.PlafondPaiment} DA
            </Typography>
          </Box>
          <Box
            sx={{
              classname: "border",
              display: "flex",
              alignItems: "center",
              mt: 0.5,
            }}
          >
            <FiberManualRecordIcon sx={{ width: 8, mr: 1, ml: 1.5 }} />
            <Typography
              variant="body2"
              color="inherit"
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "10px", sm: "11px", md: "13px" },
                fontWeight: 600,
                color: theme.palette.elementCard.primary,
              }}
            >
              Validité : &nbsp;
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "10px", sm: "11px", md: "13px" },
                fontWeight: 500,
              }}
            >
              {item.attributes.Validite} mois
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ width: "90%" }} />
        <CardActions>
          <Stack
            direction={{ md: "row", sm: "row", xs: "column" }}
            justifyContent={"space-between"}
            alignContent={"center"}
            gap={{ xs: 2, sm: 1, md: 0 }}
            mt={5}
            flexGrow={1}
          >
            <Rating precision={0.1} name="read-only" value={3} readOnly />
            <Button
              sx={{
                borderWidth: "1.5px",
                borderRadius: "10px",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "#45a049",
                  color: "white",
                  borderColor: "#068548",
                },
              }}
              variant="outlined"
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "9px", sm: "11px", md: "14px" },
                  fontFamily: "Acme",
                  textDecoration: "none",
                }}
              >
                Plus de details
              </Typography>
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CreditCardComponent;
