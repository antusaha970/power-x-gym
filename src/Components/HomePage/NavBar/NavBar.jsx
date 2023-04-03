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

  const handleClose = () => {
    setAnchorEl(null);
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
          <Link className="nav-link">Services</Link>
          <Link to="/ourClasses" className="nav-link">
            Our Classes
          </Link>
          <Link className="nav-link">About Us</Link>
          <Link className="nav-link">Blog</Link>
          <Link className="nav-link">Pricing</Link>
          <Link className="nav-link">Contact Us</Link>
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
            <Link className="nav-link-mbl" onClick={handleClose}>
              Services
            </Link>
            <Link
              to="/ourClasses"
              className="nav-link-mbl"
              onClick={handleClose}
            >
              Our Classes
            </Link>
            <Link className="nav-link-mbl" onClick={handleClose}>
              About Us
            </Link>
            <Link className="nav-link-mbl" onClick={handleClose}>
              Blog
            </Link>
            <Link className="nav-link-mbl" onClick={handleClose}>
              Pricing
            </Link>
            <Link className="nav-link-mbl" onClick={handleClose}>
              Contact Us
            </Link>
          </Menu>
        </Box>
      </Stack>
    </Container>
  );
};

export default NavBar;
