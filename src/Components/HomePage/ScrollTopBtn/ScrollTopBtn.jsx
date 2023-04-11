import React from "react";
import NavigationIcon from "@mui/icons-material/Navigation";
import "./ScrollTopBtn.css";
import { IconButton } from "@mui/material";
const ScrollTopBtn = () => {
  const scrollButton = document.getElementById("scrollBtn");
  // scroll top function
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  // For toggling scroll button
  function toggleScrollBtn() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      if (scrollButton !== null) scrollButton.style.display = "block";
    } else {
      if (scrollButton !== null) {
        scrollButton.style.display = "none";
      }
    }
  }
  // When scrolling this function will trigger
  window.onscroll = function () {
    toggleScrollBtn();
  };

  return (
    <IconButton
      sx={{
        color: "#FCD842",
        position: "fixed",
        right: "10px",
        bottom: "10px",
        zIndex: "100",
      }}
      id="scrollBtn"
      onClick={scrollToTop}
    >
      <NavigationIcon
        sx={{
          fontSize: "50px",
        }}
      />
    </IconButton>
  );
};

export default ScrollTopBtn;
