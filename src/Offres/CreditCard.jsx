import {
  Container,
  Stack,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
 
 
 
function CreditCard() {
  return (
    <Container>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        {/*{data.data.map((item) => (*/}
        {["0", "1", "2", ""].map((item) => (
          <Card
            elevation={5}
            key={item}
            component={motion.section}
            layout
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ duration: 1.8, type: "spring", stiffness: 70 }}
            sx={{
              minWidth: "350px",
              cursor: "pointer",
              
              maxWidth: "550px",
              minHeight: "600px",
              mt: 6,
              ":hover ": {
                rotate: "0.1deg",
                scale: "1.03",
                transition: "0.4s",
              },
            }}
          >
            <CardHeader sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2.5,
                }}
              title="Titre de la carte"
              subheader="Sous-titre de la carte"
            />
            <CardMedia
              //onClick={handleClickOpen}
              sx={{ height: "25%", cursor: "pointer", width: "100%" }}
              // @ts-ignore
              //image={`${import.meta.env.VITE_BASE_URL}${
              //item.attributes.BankImg.data.attributes.url
              //}`}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Bonjour" //{item.attributes.Title}
              className="border"
            />
            <CardContent>
              {/*<Typography variant="body2" color="inherit">
                        {item.attributes.Description}
                    </Typography>*/}
              {/*<a href={item.attributes.WebSite}> {item.attributes.WebSite} </a>*/}
            </CardContent>
            <CardActions>
              <Button
                sx={{ borderWidth: "1.45px", ml: { sm: "66%", md: "66%" } }}
                variant="outlined"
              >
                Voir Plus
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
export default CreditCard;
