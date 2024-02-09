//import hook
import { useState } from "react";

//import style & img
import "./header.css";
import logo from "../../assets/img/my-logo.webp";

//import component and icon
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Link,
  MenuItem,
  Menu,
} from "@mui/material";
import { BsLinkedin, BsWhatsapp, BsFacebook } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

let linkstyles = { color: "#fff", opacity: 0.75, "&:hover": { opacity: 1 } };

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [appBarOnScreen, setAppBarOnScreen] = useState(true);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY < 20) {
      if (!appBarOnScreen) {
        setAppBarOnScreen(true);
      }
    } else {
      if (appBarOnScreen) setAppBarOnScreen(false);
    }
  });

  return (
    <Box>
      <AppBar
        position={"fixed"}
        sx={{
          backgroundColor: appBarOnScreen
            ? "transparent !important"
            : "black !important",
          transition: "all 0.5s ease-in-out",
          boxShadow: 0,
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
                key={1}
                onClick={handleCloseNavMenu}
                size="small"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <BsFacebook />
              </IconButton>

              <IconButton
                key={2}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <BsWhatsapp />
              </IconButton>
              <IconButton
                key={3}
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
                project
              </Link>
              <Link href="skills" underline="none" sx={linkstyles}>
                skills
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
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiPaper-root": {
                  width: "100% !important",
                  backgroundColor: "black !important",
                },
              }}
            >
              <MenuItem
                key={1}
                onClick={handleCloseNavMenu}
                sx={{
                  backgroundColor: "black",
                }}
              >
                <Link
                  underline="none"
                  href="#home"
                  color="rgb(255 255 255 / 75%)"
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem
                key={2}
                onClick={handleCloseNavMenu}
                sx={{
                  backgroundColor: "black",
                }}
              >
                <Link
                  underline="none"
                  href="#projects"
                  color="rgb(255 255 255 / 75%)"
                >
                  Projects
                </Link>
              </MenuItem>
              <MenuItem
                key={3}
                onClick={handleCloseNavMenu}
                sx={{
                  backgroundColor: "black",
                }}
              >
                <Link
                  underline="none"
                  href="#skills"
                  color="rgb(255 255 255 / 75%)"
                >
                  Skills
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;
