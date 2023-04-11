import React, { useState } from "react";
import {
  Container,
  Stack,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavBar.css";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClose = (id = null) => {
    setAnchorEl(null);
    if (id) {
      handleClickScroll(id);
    }
  };

  return (
    <Container maxWidth="lg">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontSize: "30px",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Power <font color="#FCD842">X</font>
          </Typography>
        </Box>
        <Box display={{ lg: "block", md: "block", sm: "none", xs: "none" }}>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link
            onClick={() => handleClickScroll("service")}
            className="nav-link"
          >
            Services
          </Link>
          <Link to="/ourClasses" className="nav-link">
            Our Classes
          </Link>
          <Link className="nav-link" onClick={() => handleClickScroll("about")}>
            About Us
          </Link>
          <Link className="nav-link" to="/blogs">
            Blog
          </Link>
          <Link to="/pricing" className="nav-link">
            Pricing
          </Link>
          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>
        </Box>

        <Box display={{ lg: "none", md: "none", sm: "block", xs: "block" }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon
              sx={{
                color: "white",
              }}
            />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link className="nav-link-mbl" to="/" onClick={handleClose}>
              Home
            </Link>
            <Link
              className="nav-link-mbl"
              onClick={() => handleClose("service")}
            >
              Services
            </Link>
            <Link
              to="/ourClasses"
              className="nav-link-mbl"
              onClick={handleClose}
            >
              Our Classes
            </Link>
            <Link className="nav-link-mbl" onClick={() => handleClose("about")}>
              About Us
            </Link>
            <Link className="nav-link-mbl" to="/blogs" onClick={handleClose}>
              Blog
            </Link>
            <Link to="/pricing" className="nav-link-mbl" onClick={handleClose}>
              Pricing
            </Link>
            <Link className="nav-link-mbl" onClick={handleClose} to="/contact">
              Contact Us
            </Link>
          </Menu>
        </Box>
      </Stack>
    </Container>
  );
};

export default NavBar;
