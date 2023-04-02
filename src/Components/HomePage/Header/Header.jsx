import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
import CallToAction from "../CallToAction/CallToAction";

const Header = () => {
  return (
    <header className="header-bg">
      <NavBar />
      <CallToAction />
    </header>
  );
};

export default Header;
