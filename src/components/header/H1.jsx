import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = ["AR", "EN", "FR"];

const H1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: "#068548",
        py: "12px",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Box
            sx={{ width: "40px", height: "40px", overflow: "hidden", mr: 1 }}
          >
            <img src="src/components/img/Logo.png" alt="" />
          </Box>

          <a href="/" style={{ textDecoration: "none", cursor: "pointer" }}>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: 900,
                color: "#fff",
                cursor: "pointer", // Définissez le curseur ici si vous souhaitez qu'il soit pointer
              }}
              variant="body2"
            >
              SmartBankChoice
            </Typography>
          </a>
          <Box flexGrow={1} />

          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "16px" }} />
              </IconButton>
            )}
          </div>

          <List
            component="nav"
            aria-label="Device settings"
            sx={{ p: 0, m: 0 }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "11px", color: "#fff" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
            </ListItem>
          </List>

          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          {/* <TwitterIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
          <FacebookIcon
            sx={{
              fontSize: "16px",
              mx: 1,
              color: "#fff",
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />*/}
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FFF9F9",
              color: "#068548",
              fontWeight: 600,
            }}
            startIcon={<AccountCircleIcon />}
          >
            Login
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default H1;
