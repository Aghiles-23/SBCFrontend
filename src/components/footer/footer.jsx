import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import TelIcon from "@mui/icons-material/Phone";

const Footer = () => {
  const theme = useTheme();
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
      sx={{
        // @ts-ignore
        bgcolor: theme.palette.aghiles.prim,
        py: 4.3,
        height: "100%",
        mt: 3,
      }}
    >
      {useMediaQuery("(min-width:900px)") && (
        <Stack
          direction={"row"}
          alignItems={"left"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box sx={{ ml: 7 }}>
            <Typography
              sx={{
                mt: "20%",
                mb: 2,
                ml: 1,
                fontSize: "36px",
                fontWeight: 900,
                fontFamily: "Acme",
                cursor: "pointer",
                // @ts-ignore
                color: theme.palette.myColor.main,
              }}
              onClick={() => handleScroll("home")}
            >
              SmartBankChoice
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                // @ts-ignore
                color: theme.palette.myColor.main,
                ml: 5,
              }}
              variant="body2"
            >
              Votre meilleur aide financier
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                // @ts-ignore
                color: theme.palette.myColor.main,
                ml: 7,
                mt: 3,
              }}
              variant="body2"
            >
              © 2024 SmartBankChoice
            </Typography>
          </Box>

          <Stack direction={"column"} alignItems={"center"} display={"flex"}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 800,
                fontFamily: "Acme",
                color: "#068548",
                mt: 3,
                mb: 1.5,
              }}
              variant="body2"
            >
              Onglets
            </Typography>
            <Button onClick={() => handleScroll("home")}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                }}
                variant="body2"
              >
                Home
              </Typography>{" "}
            </Button>
            <Button onClick={() => handleScroll("about")}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                }}
                variant="body2"
              >
                A propos de nous
              </Typography>
            </Button>
            <Button onClick={() => handleScroll("services")}>
              <Typography
                sx={{
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 400,
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                }}
                variant="body2"
              >
                Services
              </Typography>
            </Button>
            <Button onClick={() => handleScroll("BankLogoSec")}>
              <Typography
                sx={{
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 400,
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                }}
                variant="body2"
              >
                Nos partenaires
              </Typography>
            </Button>
          </Stack>
          <Stack direction={"column"} alignItems={"center"} display={"flex"}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 800,
                fontFamily: "Acme",
                color: "#068548",
                mt: 3,
                mb: 1.5,
              }}
              variant="body2"
            >
              Services
            </Typography>
            <Button component={Link} to="/">
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                }}
                variant="body2"
              >
                Home
              </Typography>{" "}
            </Button>
            <Button component={Link} to="/banques">
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                }}
                variant="body2"
              >
                banques
              </Typography>
            </Button>
            <Button component={Link} to="/offres">
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                }}
                variant="body2"
              >
                Offres de crédit
              </Typography>
            </Button>
          </Stack>
          <Stack direction={"column"} alignItems={"center"} display={"flex"}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 800,
                fontFamily: "Acme",
                color: "#068548",
                mt: 3,
                mb: 2.5,
              }}
              variant="body2"
            >
              Contact
            </Typography>
            <Stack direction={"row"} display={"flex"} mb={"15px"}>
              <MailIcon
                sx={{
                  fontSize: "16px",
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                  mr: 2,
                }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                }}
                variant="body2"
              >
                aghilesbelkacem5@gmail.com
              </Typography>
            </Stack>
            <Stack direction={"row"} display={"flex"}>
              <TelIcon
                sx={{
                  fontSize: "16px",
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                  mr: 2,
                }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                }}
                variant="body2"
              >
                +213795851941
              </Typography>
            </Stack>
          </Stack>
          <Box></Box>
        </Stack>
      )}
      ,
      {useMediaQuery("(max-width:900px)") && (
        <Stack
          direction={"column"}
          alignItems={"center"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box sx={{ ml: 7 }}>
            <a
              href="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                // @ts-ignore
                color: theme.palette.myColor.main,
              }}
            >
              <Typography
                sx={{
                  mt: "20%",
                  mb: 2,
                  mr: 9,
                  fontSize: "36px",
                  fontWeight: 900,
                  fontFamily: "Acme",
                  cursor: "pointer",
                }}
                variant="body2"
              >
                SmartBankChoice
              </Typography>
            </a>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                // @ts-ignore
                color: theme.palette.myColor.main,
                ml: 7,
              }}
              variant="body2"
            >
              Votre meilleur aide financier
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                // @ts-ignore
                color: theme.palette.myColor.main,
                ml: 9,
                mt: 3,
              }}
              variant="body2"
            >
              © 2024 SmartBankChoice
            </Typography>
          </Box>
          <Stack direction={"column"} alignItems={"center"} display={"flex"}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 800,
                fontFamily: "Acme",
                color: "#068548",
                mt: 3,
                mb: 1.5,
              }}
              variant="body2"
            >
              Onglets
            </Typography>
            <Button onClick={() => handleScroll("home")}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                }}
                variant="body2"
              >
                Home
              </Typography>{" "}
            </Button>
            <Button onClick={() => handleScroll("about")}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                }}
                variant="body2"
              >
                A propos de nous
              </Typography>
            </Button>
            <Button onClick={() => handleScroll("services")}>
              <Typography
                sx={{
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 400,
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                }}
                variant="body2"
              >
                Services
              </Typography>
            </Button>
            <Button onClick={() => handleScroll("BankLogoSec")}>
              <Typography
                sx={{
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 400,
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                }}
                variant="body2"
              >
                Nos partenaires
              </Typography>
            </Button>
          </Stack>

          <Stack direction={"column"} alignItems={"center"} display={"flex"}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 800,
                // @ts-ignore
                color: "#068548",
                mt: 3,
                mb: 1.5,
              }}
              variant="body2"
            >
              Services
            </Typography>
            <Button component={Link} to="/">
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                }}
                variant="body2"
              >
                Home
              </Typography>{" "}
            </Button>
            <Button
              component={Link}
              to="/banques"
              // @ts-ignore
              sx={{ color: theme.palette.text.primary }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                }}
                variant="body2"
              >
                Banques
              </Typography>{" "}
            </Button>
            <Button component={Link} to="/offres">
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                }}
                variant="body2"
              >
                Offres de crédit
              </Typography>
            </Button>
          </Stack>
          <Stack direction={"column"} alignItems={"center"} display={"flex"}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 800,
                // @ts-ignore
                color: "#068548",
                mt: 3,
                mb: 2.5,
              }}
              variant="body2"
            >
              Contact
            </Typography>
            <Stack direction={"row"} display={"flex"} mb={"15px"}>
              <MailIcon
                sx={{
                  fontSize: "16px",
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                  mr: 2,
                }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                }}
                variant="body2"
              >
                aghilesbelkacem5@gmail.com
              </Typography>
            </Stack>
            <Stack direction={"row"} display={"flex"}>
              <TelIcon
                sx={{
                  fontSize: "16px",
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                  mr: 2,
                }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  // @ts-ignore
                  color: theme.palette.myColor.main,
                }}
                variant="body2"
              >
                +213795851941
              </Typography>
            </Stack>
          </Stack>
          <Box></Box>
        </Stack>
      )}
    </Box>
    // @ts-ignore
  );
  // @ts-ignore
};

export default Footer;
