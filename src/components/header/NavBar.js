import { BsLinkedin, BsWhatsapp, BsFacebook } from "react-icons/bs";

import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Link,
  Typography,
  MenuItem,
  Menu,
  useScrollTrigger,
  createTheme,
} from "@mui/material";

import logo from "../../assets/img/my-logo.webp";

function ResponsiveAppBar() {
  let linkstyles = { color: "#fff", opacity: 0.75, "&:hover": { opacity: 1 } };
  const [anchorElNav, setAnchorElNav] = useState(null);
  let theme = createTheme();
  // console.log(theme);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: useScrollTrigger("1") ? "black" : "transparent",
          transition: "all .5s ease-in-out",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            component={"img"}
            src={logo}
            alt="Logo"
            sx={{
              width: {
                xs: "50%",
                sm: "300px ",
                md: "35%",
              },
              maxWidth: { xs: "250px", md: "350px" },
              minWidth: "250px",
            }}
          />

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexGrow: 1,
              maxWidth: "400px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-around",
              }}
            >
              <IconButton
                onClick={handleCloseNavMenu}
                size="small"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <BsFacebook />
              </IconButton>

              <IconButton
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <BsWhatsapp />
              </IconButton>
              <IconButton
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <BsLinkedin />
              </IconButton>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link href="home" underline="none" sx={linkstyles}>
                home
              </Link>
              <Link href="project" underline="none" sx={linkstyles}>
                home
              </Link>
              <Link href="skills" underline="none" sx={linkstyles}>
                home
              </Link>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <AiOutlineMenu />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              <MenuItem key={1} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{1}</Typography>
              </MenuItem>
              <MenuItem key={2} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{2}</Typography>
              </MenuItem>
              <MenuItem key={3} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{3}</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;
